//import PredictV8Randomness from "./PredictV8Randomness";
import * as z3 from "z3-solver";

class PredictV8Randomness {
  private state0: bigint;
  private state1: bigint;
  private recovered: boolean = false;
  private sequence: number[];

  constructor(sequence: number[]) {
    if (sequence.length < 4) throw new Error("Need at least 4 outputs");
    this.sequence = [...sequence].reverse();
  }

  private xorShift128Plus(s0: bigint, s1: bigint): [bigint, bigint] {
    let x = s0;
    let y = s1;
    const result0 = y;

    x ^= x << 23n;
    x ^= x >> 17n;
    x ^= y;
    x ^= y >> 26n;

    const result1 = x;
    return [result0, result1];
  }

  private doubleToUInt64(value: number): bigint {
    const buffer = Buffer.alloc(8);
    buffer.writeDoubleLE(value, 0);
    return (BigInt(buffer.readUInt32LE(4)) << 32n) | BigInt(buffer.readUInt32LE(0));
  }

  private extractMantissa(value: number): bigint {
    const uint64 = this.doubleToUInt64(value + 1);
    return uint64 & ((1n << 52n) - 1n);
  }

  private toDouble(n: bigint): number {
    const random = (n >> 12n) | 0x3ff0000000000000n;
    const buffer = Buffer.allocUnsafe(8);
    buffer.writeBigUInt64LE(random, 0);
    return buffer.readDoubleLE(0) - 1;
  }

  private async recoverState() {
    const { Context } = await z3.init();
    const ctx = Context("v8");
    const solver = new ctx.Solver();

    const se0 = ctx.BitVec.const("s0", 64);
    const se1 = ctx.BitVec.const("s1", 64);

    let s0 = se0;
    let s1 = se1;

    for (const output of this.sequence) {
      [s0, s1] = this.xorShift128Plus(s0, s1);
      const mantissa = this.extractMantissa(output);
      solver.add(s0.lshr(12).eq(ctx.BitVec.val(mantissa, 64)));
    }

    const check = await solver.check();
    if (check !== "sat") throw new Error("unsat");

    const model = solver.model();
    this.state0 = BigInt(model.get(se0).value());
    this.state1 = BigInt(model.get(se1).value());
    this.recovered = true;
  }

  public async predictNext(): Promise<number> {
    if (!this.recovered) await this.recoverState();

    [this.state0, this.state1] = this.xorShift128Plus(this.state0, this.state1);
    return this.toDouble(this.state0);
  }
}


async function main() {
  const seed = Array.from({length:5}, Math.random);
	const predictor = new PredictV8Randomness(seed);
  const predictFutureCount = 10;
	const next = await predictor.predictFuture(predictFutureCount);
  const actuals = Array.from({length:predictFutureCount}, Math.random);

	console.log({ 
    sequence: predictor.sequence, 
    predictions: next, 
    actuals, 
    isCorrect: next.every((val, i) => actuals[i] === val)
  });
}
main();