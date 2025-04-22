import * as z3 from "z3-solver";

export default class ChromeRandomnessPredictor {
  #mask = 0xffffffffffffffffn;
  #concreteState0: bigint | undefined;
  #concreteState1: bigint | undefined;
  #context: z3.Context | undefined;
  #solver: z3.Solver | undefined;
  #seState0: z3.BitVec | undefined;
  #seState1: z3.BitVec | undefined;
  #s0Ref: z3.BitVec | undefined;
  #s1Ref: z3.BitVec | undefined;

  constructor(public readonly sequence: number[]) {}

  static async create(sequence: number[]): Promise<ChromeRandomnessPredictor> {
    try {
      const self = new ChromeRandomnessPredictor(sequence);

      const { Context } = await z3.init();
      self.#context = Context("main");
      self.#solver = new self.#context.Solver();

      self.#seState0 = self.#context.BitVec.const("se_state0", 64);
      self.#seState1 = self.#context.BitVec.const("se_state1", 64);
      self.#s0Ref = self.#seState0;
      self.#s1Ref = self.#seState1;

      const reversedSequence = [...self.sequence].reverse();

      for (const value of reversedSequence) {
        self.#xorShift128pSymbolic();
        const mantissa = self.#recoverMantissa(value);
        const state0Shifted = self.#context.BitVec.val(mantissa, 64);
        self.#solver.add(self.#seState0!.lshr(11).eq(state0Shifted));
      }

      const result = await self.#solver.check();
      if (result !== "sat") {
        return Promise.reject("Unsat");
      }

      const model = self.#solver.model();
      self.#concreteState0 = (model.get(self.#s0Ref!) as z3.BitVecNum).value();
      self.#concreteState1 = (model.get(self.#s1Ref!) as z3.BitVecNum).value();

      return Promise.resolve(self);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public predictNext(): number {
    if (this.#concreteState0 === undefined || this.#concreteState1 === undefined) {
      throw new Error(`Concrete states not defined! Something went wrong.`);
    }
    const output = this.#xorShift128pConcreteBackwards();
    return this.#toDouble(output);
  }

  #xorShift128pSymbolic(): void {
    if (!this.#seState0 || !this.#seState1) {
      throw new Error("Symbolic states not initialized");
    }
    const se_s1 = this.#seState0;
    const se_s0 = this.#seState1;
    this.#seState0 = se_s0;
    let newS1 = se_s1.xor(se_s1.shl(23));
    newS1 = newS1.xor(newS1.lshr(17));
    newS1 = newS1.xor(se_s0);
    newS1 = newS1.xor(se_s0.lshr(26));
    this.#seState1 = newS1;
  }

  #xorShift128pConcreteBackwards(): bigint {
    const result = this.#concreteState0!;
    let ps1 = this.#concreteState0!;
    let ps0 = this.#concreteState1! ^ (ps1 >> 26n);
    ps0 ^= ps1;
    ps0 = (ps0 ^ (ps0 >> 17n) ^ (ps0 >> 34n) ^ (ps0 >> 51n)) & this.#mask;
    ps0 = (ps0 ^ (ps0 << 23n) ^ (ps0 << 46n)) & this.#mask;
    this.#concreteState0 = ps0;
    this.#concreteState1 = ps1;
    return result;
  }

  #recoverMantissa(double: number): bigint {
    return BigInt(Math.floor(double * Number(1n << 53n)));
  }

  #toDouble(val: bigint): number {
    return Number(val >> 11n) / Math.pow(2, 53);
  }
}
