# predict-v8-randomness

A huge shout-out to [PwnFunction](https://github.com/PwnFunction/v8-randomness-predictor) for the inspiration!

Uses [`z3`](https://github.com/Z3Prover/z3) to predict the output of `Math.random()` in [V8](https://v8.dev/) (the JS engine that Chrome/NodeJS use) via Node or command line.

# Install

```
npm i predict-v8-randomness
```

# Node

```js
const PredictV8Randomness = require("predict-v8-randomness");
// or ES6
import PredictV8Randomness from "predict-v8-randomness";
```

## Dynamic Seed Sequence

```js
// Let us dynamically create initial sequence (seed)
const predictor = new PredictV8Randomness(5); 
// Predict next Math.random() output
const nextRand = predictor.predictNext();
// Since we dynamically created the sequence in this "session" we can check live
// if our prediction is accurate.
console.log("Accurate?", nextRand === Math.random());

// Predict next 10 Math.random() outputs
const nextTenRand = predictor.predictFuture(10);
const actuals = Array.from({ length: 10 }, Math.random);
console.log("Accurate?", nextTenRand.every((e, i) => actuals[i] === e));
```

## Provide Seed Sequence

```js
// You can create random numbers via Node REPL
// Open Node REPL and do `console.log(Array.from({ length: N }, Math.random))`
// Then copy and paste into script
// DO NOT CLOSE REPL, it must remain open so the Node entropy pool doesn't change
const initialSequence = [
  // Paste REPL output here
];
const predictor = new PredictV8Randomness(initialSequence);
const nextRand = predictor.predictNext();
// This is where you have to go back to the REPL and do : `Math.random()`
// Does what you got match with `nextRand`?
```

# CLI

 - `--seed` and `--sequence` are mutually exclusive

```bash
predict-v8-randomness --predictions 5 --seed 5
# We will predict 5 future Math.random() outputs
# We dynamically create the initial sequence with 5 items
```

```bash
predict-v8-randomness --predictions 5 --sequence 1,2,3,4
# We will predict 5 future Math.random() outputs
# We provided our own initial sequence (pretend they are random numbers from Math.random())
```

