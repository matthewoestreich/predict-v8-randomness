import { Predictor } from "../lib";

export interface PredictArgs {
  seeds?: number;
  sequence?: number[];
  predictions: number;
}

export async function runPredictor(argv: PredictArgs) {
  if (argv.seeds) {
    const dynamicPredictor = new Predictor(argv.seeds);
    const predictions = await dynamicPredictor.predictFuture(argv.predictions);
    const actual = Array.from({ length: argv.predictions }, Math.random);
    return {
      mode: "seeds",
      generatedSequence: dynamicPredictor.sequence,
      predictions,
      actual,
      isCorrect: predictions.every((e, i) => actual[i] === e),
    };
  }

  if (argv.sequence) {
    const userPredictor = new Predictor(argv.sequence);
    const future = await userPredictor.predictFuture(argv.predictions);
    return {
      mode: "sequence",
      sequence: userPredictor.sequence,
      predictions: future,
      actual: "You'll need to get this yourself via the same way you generated the sequence",
    };
  }

  throw new Error("Please provide either --seeds or --sequence along with --predictions");
}
