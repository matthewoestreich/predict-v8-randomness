#!/usr/bin/env node

import yargs, { Arguments, CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";
import { runPredictor } from "./runPredictor";
import { PredictArgs } from "./runPredictor";

const predictCommand: CommandModule = {
  command: "*",
  describe: "Predict future Math.random() values from seed or sequence",
  builder: (yargs) => {
    return yargs
      .option("sequence", {
        alias: "seq",
        describe: "Manually provided seed values",
        type: "array",
        demandOption: false,
      })
      .option("predictions", {
        alias: "p",
        describe: "Number of future predictions to make",
        type: "number",
        demandOption: true,
      })
      .check((argv) => {
        if (argv.sequence && !argv.predictions) {
          throw new Error("The --predictions option is required if --sequence is used");
        }
        return true;
      });
  },
  handler: async (argv: Arguments) => {
    try {
      const result = await runPredictor(argv as PredictArgs & Arguments);
      console.log(JSON.stringify(result, null, 2));
    } catch (err: any) {
      console.error(err.message);
      process.exit(1);
    }
  },
};

yargs(hideBin(process.argv)).scriptName("predict-v8-randomness").usage("$0 [args]").command(predictCommand).help().argv;
