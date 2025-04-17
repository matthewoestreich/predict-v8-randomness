import * as z3 from "z3-solver";

class Predictor {
  // In my testing, I discovered we need at least 4 items in order to predict correctly.
  #MIN_SEQUENCE_LENGTH = 4;

  #seState0: z3.BitVec | undefined;
  #seState1: z3.BitVec | undefined;
  #solver: z3.Solver | undefined;
  #context: z3.Context | undefined;
  #internalSequence: number[] = [];

  public sequence: number[] = [];

  constructor(sequence?: number[]) {
    if (sequence === undefined) {
      // Generate sequence ourselves
      sequence = Array.from({ length: this.#MIN_SEQUENCE_LENGTH }, Math.random);
    }
    if (sequence.length < this.#MIN_SEQUENCE_LENGTH) {
      throw new Error(`We need at least 4 items to be accurate! Got ${sequence.length} items`);
    }
    this.#internalSequence = sequence;
    this.sequence = [...this.#internalSequence];
    this.#internalSequence.reverse();
  }

  public async predictNext(n: number = 1): Promise<number[]> {
    const predictions: number[] = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
      const next = await this.#predict();
      predictions[i] = next;
      this.#internalSequence.unshift(next);
      // Only keep 4 numbers since that seems to be what we need to successfully predict.
      this.#internalSequence.pop();
    }

    return predictions;
  }

  async #predict() {
    const { Context } = await z3.init();
    this.#context = Context("main");
    this.#solver = new this.#context.Solver();
    this.#seState0 = this.#context.BitVec.const("se_state0", 64);
    this.#seState1 = this.#context.BitVec.const("se_state1", 64);

    for (let i = 0; i < this.#internalSequence.length; i++) {
      this.#xorShift128Plus(this.#seState0, this.#seState1);
      const uint64 = this.#doubleToUInt64(this.#internalSequence[i] + 1);
      const mantissa = uint64 & ((BigInt(1) << BigInt(52)) - BigInt(1));
      this.#solver.add(this.#seState0.lshr(12).eq(this.#context.BitVec.val(mantissa, 64)));
    }

    const check = await this.#solver.check();
    if (check !== "sat") {
      throw new Error(`Unsatisfiable: unable to reconstruct internal state. ${check}`);
    }

    const model = this.#solver.model();

    const states = {};
    for (const state of model.decls()) {
      // @ts-ignore
      states[state.name()] = model.get(state);
    }

    // @ts-ignore
    const state0 = states["se_state0"].value(); // BigInt
    return this.#toDouble(state0);
  }

  #xorShift128Plus(state0: z3.BitVec, state1: z3.BitVec) {
    let s1 = state0;
    let s0 = state1;
    this.#seState0 = s0;
    s1 = s1.xor(s1.shl(23));
    s1 = s1.xor(s1.lshr(17));
    s1 = s1.xor(s0);
    s1 = s1.xor(s0.lshr(26));
    this.#seState1 = s1;
  }

  #doubleToUInt64(value: number): bigint {
    const buffer = Buffer.alloc(8);
    buffer.writeDoubleLE(value, 0);
    return (BigInt(buffer.readUInt32LE(4)) << BigInt(32)) | BigInt(buffer.readUInt32LE(0));
  }

  #toDouble(n: bigint): number {
    const random = (n >> BigInt(12)) | BigInt(0x3ff0000000000000);
    const buffer = Buffer.allocUnsafe(8);
    buffer.writeBigUInt64LE(random, 0);
    return buffer.readDoubleLE(0) - 1;
  }
}

export default Predictor;
