import * as z3 from "z3-solver";

const NUMBER_OF_SEED_NUMBERS = 5;
const NUMBER_OF_FUTURE_PREDICTIONS = 10;

main().catch(console.error);

async function main() {
  const sequence: number[] = Array.from({ length: NUMBER_OF_SEED_NUMBERS }, Math.random).reverse();
  const futurePredictions: number[] = [];
  const actuals: number[] = [];

  for (let i = 0; i < NUMBER_OF_FUTURE_PREDICTIONS; i++) {
    const next = await findNext(sequence);
    futurePredictions.push(next);
    actuals.push(Math.random());
    sequence.unshift(next);
  }

  let isSuccess = true;
  for (let i = 0; i < futurePredictions.length; i++) {
    if (futurePredictions[i] !== actuals[i]) {
      isSuccess = false;
      break;
    }
  }

  console.log({
    seedSequence: sequence.slice(0, NUMBER_OF_SEED_NUMBERS),
    predictions: futurePredictions, 
    actual: actuals, 
    arePredictionsCorrect: isSuccess,
  });
}

/**
 * 
 * @param sequence 
 * @returns 
 */
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
    float64.writeDoubleLE(sequence[i]+1, 0);
    const u_long_long = (BigInt(float64.readUInt32LE(4)) << 32n) | BigInt(float64.readUInt32LE(0));
    const mantissa = u_long_long & ((1n << 52n) - 1n);

    solver.add(se_state0.lshr(12).eq(context.BitVec.val(mantissa, 64)));
  }

  const check = await solver.check();
  if (check === "sat") {
    const model = solver.model();

    const states = {};
    for (const state of model.decls()) {
      states[state.name()] = model.get(state);
    }
 
    const state0 = states["se_state0"].value(); // BigInt
    const u_long_long_64 = (state0 >> 12n) | 0x3FF0000000000000n;;
    const float64 = Buffer.allocUnsafe(8);
    float64.writeBigUInt64LE(u_long_long_64, 0);
    const nextSequence = float64.readDoubleLE(0) - 1;
    return nextSequence;
  } else {
    throw new Error(check);
  }
}
