#!/usr/bin/env tsx

import * as z3 from "z3-solver";

// Default values if no args provided
const DEFAULT_SEED_COUNT = 5;
const DEFAULT_PREDICT_COUNT = 1;

// Max values users can provide via args
const MAX_SEED_COUNT = 20;
const MAX_PREDICT_COUNT = 10;

// Parse CLI arguments
const seedCount = parseInt(getArg("--seed-count") ?? DEFAULT_SEED_COUNT.toString());;
const predictCount = parseInt(getArg("--predict-count") ?? DEFAULT_PREDICT_COUNT.toString());

if (seedCount > MAX_SEED_COUNT) {
  throw new Error(`MAX SEED COUNT EXCEEDED the max seed-count is ${MAX_SEED_COUNT} : got ${seedCount}`);
}
if (predictCount > MAX_PREDICT_COUNT) {
  throw new Error(`MAX PREDICT COUNT EXCEEDED the max predict-count is ${MAX_PREDICT_COUNT} : got ${predictCount}`);
}

main().catch(console.error);

async function main() {
  const sequence: number[] = Array.from({ length: seedCount }, Math.random).reverse();
  const originalSequence = [...sequence];
  const futurePredictions: number[] = [];
  const actuals: number[] = [];

  for (let i = 0; i < predictCount; i++) {
    const next = await findNext(sequence);
    futurePredictions.push(next);
    actuals.push(Math.random());
    sequence.unshift(next);
  }

  console.log(JSON.stringify({
    seedCount,
    predictCount,
    seedSequence: originalSequence,
    predictions: futurePredictions,
    actual: actuals,
    arePredictionsCorrect: futurePredictions.every((pred, i) => pred === actuals[i]),
  }, null, 2));
}

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index !== -1 ? process.argv[index + 1] : undefined;
}

async function findNext(sequence: number[]): Promise<number> {
  const { Context } = await z3.init();
  const context = Context("main");
  const solver = new context.Solver();

  let [se_state0, se_state1] = context.BitVec.consts(["se_state0", "se_state1"], 64);

  for (let i = 0; i < sequence.length; i++) {
    let se_s1 = se_state0;
    let se_s0 = se_state1;

    se_state0 = se_s0;
    se_s1 = se_s1.xor(se_s1.shl(23));
    se_s1 = se_s1.xor(se_s1.lshr(17));
    se_s1 = se_s1.xor(se_s0);
    se_s1 = se_s1.xor(se_s0.lshr(26));
    se_state1 = se_s1;

    const float64 = Buffer.alloc(8);
    float64.writeDoubleLE(sequence[i] + 1, 0);
    const u_long_long = (BigInt(float64.readUInt32LE(4)) << 32n) | BigInt(float64.readUInt32LE(0));
    const mantissa = u_long_long & ((1n << 52n) - 1n);

    solver.add(se_state0.lshr(12).eq(context.BitVec.val(mantissa, 64)));
  }

  const check = await solver.check();
  if (check !== "sat") {
    throw new Error("Unsatisfiable: unable to reconstruct internal state.");
  }

  const model = solver.model();
  const states = {};
  for (const state of model.decls()) {
    states[state.name()] = model.get(state);
  }

  const state0 = states["se_state0"].value(); // BigInt
  const u_long_long_64 = (state0 >> 12n) | 0x3FF0000000000000n;
  const float64 = Buffer.allocUnsafe(8);
  float64.writeBigUInt64LE(u_long_long_64, 0);
  return float64.readDoubleLE(0) - 1;
}
