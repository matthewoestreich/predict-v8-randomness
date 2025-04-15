# predict-v8-randomness

A huge shout-out to [PwnFunction](https://github.com/PwnFunction/v8-randomness-predictor) for the inspiration!

`predict-v8-randomness` uses [`z3`](https://github.com/Z3Prover/z3) to predict the output of `Math.random()` in [V8](https://v8.dev/) (the JS engine that Chrome/NodeJS use) via Node or CLI.

# TLDR

Check out live demos here!

- [Node Demos](#node-demos)
- [CLI Demos](#cli)

# Install

```
npm i predict-v8-randomness
yarn add predict-v8-randomness
```

# Node

 - **IMPORTANT** : When providing your own sequence, **THE ORDER OF THE RANDOM NUMBERS IS IMPORTANT**! The first generated value needs to be at index 0, and so forth.
 - If you generate your `Math.random()` numbers in a REPL, you need to keep that REPL open as if you close it the entropy pool for that sequence will be lost and you won't be able to validate our predictions with that current sequence

## CJS

```js
const predictV8Randomness = require("predict-v8-randomness");
const predictor = new predictV8Randomness.Predictor(...);
// or
const { Predictor } = require("predict-v8-randomness");
const predictor = new Predictor(...);
```

## ESM

```js
import predictV8Randomness from "predict-v8-randomness";
const predictor = new predictV8Randomness.Predictor(...);
// or
import { Predictor } from "predict-v8-randomness";
const predictor = new Predictor(...);
```

# Creating Random Numbers

## Dynamic Seed Sequence

 - We dynamically create initial sequence (seed) of random numbers
 - This has the benefit of being able to validate/verify our predictions in real time, in one place

### Predict Next

```js
// Create a seed sequence with 5 random numbers.
const predictor = new Predictor(5); 
// Predict next Math.random() output.
const nextRand = predictor.predictNext();
// Validate prediction right now, right here, in real time.
console.log("Accurate?", nextRand === Math.random());
```

### Predict the Future

Continuing from the code snippet above...

```js
// Predict next 10 Math.random() outputs
const nextTenRand = predictor.predictFuture(10);
const actuals = Array.from({ length: 10 }, Math.random);
console.log("Accurate?", nextTenRand.every((e, i) => actuals[i] === e));
```

## Provide Your Own Seed Sequence

 - You can create random numbers via Node REPL (or however you want to create them using `Math.random()`)
 - To create "N" random numbers, open Node REPL and do :
    - `console.log(Array.from({ length: N }, Math.random))`
    - Then copy and paste output into script
 - **DO NOT CLOSE REPL** or the process used
     - You want to keep the process open that generated your initial sequence
     - Otherwise we lose the entropy pool that was used to generate your sequence
     - And thus lose the ability to validate our predictions

```js
const initialSequence = // Paste REPL output here
const predictor = new Predictor(initialSequence);
// You'll need to compare `nextRand` with whatever the next `Math.random()` value
// is from REPL (or whatever you're using)
const nextRand = predictor.predictNext();
```

### Accuracy

 - Then to check accuracy, you have to go back to the REPL and do : 
    - `Math.random()` 
      - If you did `predictor.predictFuture(N)` then you'll need to run `Math.random()` in the REPL "N" times to validate our predictions
    - Does what you got match with `nextRand` from the script above?

# CLI

 - `--seeds` and `--sequence` are mutually exclusive

## Dynamic Seed Sequence

- In the command below
  - We will predict 5 future Math.random() outputs
  - We dynamically create the initial sequence seed with 5 random numbers

```bash
predict-v8-randomness --predictions 5 --seeds 5
```

### Output

```
{
  generatedSequence: [
    0.5139286738985778,
    0.535630644299117,
    0.2565664402819767,
    0.6489416875705203,
    0.8757185971484749
  ],
  predictions: [
    0.7849264810770431,
    0.8594975419545863,
    0.9809480830582897,
    0.981554014754481,
    0.8598441911286285
  ],
  actual: [
    0.7849264810770431,
    0.8594975419545863,
    0.9809480830582897,
    0.981554014754481,
    0.8598441911286285
  ],
  isCorrect: true
}
```

## Provide Your Own Seed Sequence

- In the command below
  - We will predict 5 future Math.random() outputs
  - You provide your own initial sequence

Generate sequence via Node REPL

<img width="638" alt="generate-sequence-for-cli" src="https://github.com/user-attachments/assets/3b7d68a7-57cc-466b-812c-88417539ed57" />

```bash
predict-v8-randomness --predictions 5 --sequence \
0.7092287773233545 \
0.1160849838240845 \
0.03743560691248082 \
0.34682790046533585 \
0.658721801819429
```

### Output

```
{
  sequence: [
    0.7092287773233545,
    0.1160849838240845,
    0.03743560691248082,
    0.34682790046533585,
    0.658721801819429
  ],
  predictions: [
    0.8366651713286275,
    0.43993318735923603,
    0.1313853892841912,
    0.9753514121066957,
    0.6235246991525747
  ],
  actual: "You'll need to get this yourself via the same way you generated the sequence"
}
```

### Actual Next `Math.random()` Values

Compare to `predictions` from Output above...

<img width="638" alt="actual-next-values-for-cli" src="https://github.com/user-attachments/assets/f0926be3-7682-48a9-85e4-92574692746b" />

# Demos

## Node Demos

### Dynamically Seed Sequence

https://github.com/user-attachments/assets/a80ce0d6-2c60-40c9-b7b2-2afa4bdde508

### Provide Your Own Seed Sequence

https://github.com/user-attachments/assets/521b69d9-672f-43b9-ab09-6b968c361668

## CLI Demos

Coming soon!
