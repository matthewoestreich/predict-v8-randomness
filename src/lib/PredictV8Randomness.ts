import * as z3 from "z3-solver";

export default class PredictV8Randomness {
	private seState0: z3.BitVec;
	private seState1: z3.BitVec;
	private solver: z3.Solver;
	private context: z3.Context;
  private internalSequence: number[];

	public sequence: number[] = [];
	public seedCount: number = 0;
	public predictCount: number = 1;

	constructor(sequence: number[]);
	constructor(seedCount: number);
	constructor(arg1: number[] | number) {
		// User provided their own sequence.
		if (Array.isArray(arg1)) {
      if (arg1.length < 4) {
        throw new Error(`We need at least 4 items to be accurate! Got ${arg1.length} items`)
      }
      this.seedCount = arg1.length;
			this.internalSequence = arg1;
		}
		// User provided dynamic Math.random sequence.
		if (typeof arg1 === "number") {
			this.seedCount = arg1;
			this.internalSequence = Array.from({ length: this.seedCount }, Math.random);
		}
		this.sequence = [...this.internalSequence]; 
    this.internalSequence.reverse();
	}

  public async predictFuture(n: number) {
		const future: number[] = [];
		for (let i = 0; i < n; i++) {
			const next = await this.predict();
			future.push(next);
			this.internalSequence.unshift(next);
		}
		return future;
	}

  public async predictNext() {
    const next = await this.predict();
    this.internalSequence.unshift(next);
    return next;
  }

	private doubleToUInt64(value: number): bigint {
		const float64 = Buffer.alloc(8);
		float64.writeDoubleLE(value, 0);
		return (BigInt(float64.readUInt32LE(4)) << 32n) | BigInt(float64.readUInt32LE(0));
	}

  /**
   * Extract mantissa
   * - Add `1.0` (+ 0x3FF0000000000000) to 52 bits
   * - Get the double and Subtract `1` to obtain the random number between [0, 1)
   *
   * > https://github.com/v8/v8/blob/a9f802859bc31e57037b7c293ce8008542ca03d8/src/base/utils/random-number-generator.h#L111
   *
   * static inline double ToDouble(uint64_t state0) {
   *     // Exponent for double values for [1.0 .. 2.0)
   *     static const uint64_t kExponentBits = uint64_t{0x3FF0000000000000};
   *     uint64_t random = (state0 >> 12) | kExponentBits;
   *     return base::bit_cast<double>(random) - 1;
   * }
   */
  private toDouble(n: bigint): number {
		const random = (n >> 12n) | 0x3ff0000000000000n;
		const buffer = Buffer.allocUnsafe(8);
		buffer.writeBigUInt64LE(random, 0);
		return buffer.readDoubleLE(0) - 1;
  }

	/**
	 * XorShift128+
	 * > https://vigna.di.unimi.it/ftp/papers/xorshiftplus.pdf
	 * > https://github.com/v8/v8/blob/a9f802859bc31e57037b7c293ce8008542ca03d8/src/base/utils/random-number-generator.h#L119
	 *
	 * class V8_BASE_EXPORT RandomNumberGenerator final {
	 *     static inline void XorShift128(uint64_t* state0, uint64_t* state1) {
	 *         uint64_t s1 = *state0;
	 *         uint64_t s0 = *state1;
	 *         *state0 = s0;
	 *         s1 ^= s1 << 23;
	 *         s1 ^= s1 >> 17;
	 *         s1 ^= s0;
	 *         s1 ^= s0 >> 26;
	 *         *state1 = s1;
	 *     }
	 * }
	 */
	private xorShift128Plus(state0: z3.BitVec, state1: z3.BitVec) {
		let s1 = state0;
		let s0 = state1;
		this.seState0 = s0;
		s1 = s1.xor(s1.shl(23));
		s1 = s1.xor(s1.lshr(17));
		s1 = s1.xor(s0);
		s1 = s1.xor(s0.lshr(26));
		this.seState1 = s1;
	}

	private async predict() {
    const { Context } = await z3.init();
		this.context = Context("main");
		this.solver = new this.context.Solver();
		this.seState0 = this.context.BitVec.const("se_state0", 64);
		this.seState1 = this.context.BitVec.const("se_state1", 64);

		for (let i = 0; i < this.internalSequence.length; i++) {
			this.xorShift128Plus(this.seState0, this.seState1);
			const uint64 = this.doubleToUInt64(this.internalSequence[i] + 1);
			const mantissa = uint64 & ((1n << 52n) - 1n);
			this.solver.add(this.seState0.lshr(12).eq(this.context.BitVec.val(mantissa, 64)));
		}

		const check = await this.solver.check();
		if (check !== "sat") {
			throw new Error(`Unsatisfiable: unable to reconstruct internal state. ${check}`);
		}

		const model = this.solver.model();

		const states = {};
		for (const state of model.decls()) {
			states[state.name()] = model.get(state);
		}

		const state0 = states["se_state0"].value(); // BigInt
    return this.toDouble(state0);
	}
}
