#!/usr/bin/env node

import yargs, { Arguments, CommandModule } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Predictor } from "../lib";

interface PredictArgs extends Arguments {
  seeds?: number;
  sequence?: number[];
  predictions: number;
}

const predictCommand: CommandModule = {
  command: '*',  
  describe: 'Predict future Math.random() values from seed or sequence',
  builder: (yargs) => {
    return yargs
      .option('seeds', {
        alias: 's',
        describe: 'Number of seed values to collect',
        type: 'number',
        demandOption: false
      })
      .option('sequence', {
        alias: 'seq',
        describe: 'Manually provided seed values',
        type: 'array',
        demandOption: false
      })
      .option('predictions', {
        alias: 'p',
        describe: 'Number of future predictions to make',
        type: 'number',
        demandOption: true
      })
      .conflicts('seeds', 'sequence')  // Ensure they can't use both options together
      .check((argv) => {
        if (argv.seeds && !argv.predictions) {
          throw new Error('The --predictions option is required if --seeds is used');
        }
        if (argv.sequence && !argv.predictions) {
          throw new Error('The --predictions option is required if --sequence is used');
        }
        return true;
      });
  },
  // @ts-ignore
  handler: async (argv: PredictArgs) => {
    if (argv.seeds) {
      const dynamicPredictor = new Predictor(argv.seeds);
      const predictions = await dynamicPredictor.predictFuture(argv.predictions);
      const actual = Array.from({ length: argv.predictions }, Math.random);
      console.log({
        generatedSequence: dynamicPredictor.sequence,
        predictions,
        actual,
        isCorrect: predictions.every((e, i) => actual[i] === e)
      });
    } else if (argv.sequence) {
      const userPredictor = new Predictor(argv.sequence);
      const future = await userPredictor.predictFuture(argv.predictions);
      console.log({
        sequence: userPredictor.sequence,
        predictions: future,
        actual: "You'll need to get this yourself via the same way you generated the sequence"
      });
    } else {
      console.log('Please provide either --seeds or --sequence along with --predictions');
    }
  }
};

yargs(hideBin(process.argv))
  .scriptName('predict-v8-randomness')
  .usage('$0 [args]')
  .command(predictCommand)
  .help()
  .argv;
