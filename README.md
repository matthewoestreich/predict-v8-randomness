# predict-v8-randomness

A huge shout-out to [PwnFunction](https://github.com/PwnFunction/v8-randomness-predictor) for the inspiration!

`predict-v8-randomness` uses [`z3`](https://github.com/Z3Prover/z3) — a [Satisfiability Modulo Theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories) (SMT) solver developed by Microsoft — to predict the output of `Math.random()` in [V8](https://v8.dev/), the JavaScript engine used by Chrome and Node.js.

- [Node Demos](#node-demos)
- [CLI Demos](#cli)

---

# Install

#### npm

```
npm i predict-v8-randomness
```

#### yarn

```
yarn add predict-v8-randomness
```

---

# Node

### CJS

```js
const predictV8Randomness = require("predict-v8-randomness");
const predictor = new predictV8Randomness.Predictor(...);
// or
const { Predictor } = require("predict-v8-randomness");
const predictor = new Predictor(...);
```

### ESM

```js
import predictV8Randomness from "predict-v8-randomness";
const predictor = new predictV8Randomness.Predictor(...);
// or
import { Predictor } from "predict-v8-randomness";
const predictor = new Predictor(...);
```

## Usage

#### Dynamically Generated Sequence

```js
// Dynamiccally generate sequence of 5 random numbers
const predictor = new Predictor(5);

// Predict next Math.random() output.
const nextRand = predictor.predictNext();
// Validate prediction right now, right here, in real time.
console.log("Accurate?", nextRand === Math.random());

// Predict next 10 Math.random() outputs
const nextTenRand = predictor.predictFuture(10);
const actuals = Array.from({ length: 10 }, Math.random);
console.log(
  "Accurate?",
  nextTenRand.every((e, i) => actuals[i] === e),
);
```

#### Provide Your Own Seed Sequence

See [Demos](#demos) for a more in-depth explanation.

```js
const initialSequence = [
  /* Your sequence here */
];
const predictor = new Predictor(initialSequence);
const nextRand = predictor.predictNext();
const futureN = predictor.predictFuture(N);
```

---

# CLI

You can use the following methods to run as CLI

| Method             | Instructions                                                                                                         | Info                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `npx`              | `> npx predict-v8-randomness [args]`                                                                                 | Probably the simplest method                  |
| Global `npm`       | <ul><li><code>> npm i -G predict-v8-randomness</code></li><li> <code>> predict-v8-randomness [args]</code></li></ul> | Can run from any terminal on your machine     |
| Local Project Path | `> node_modules/.bin/predict-v8-randomness [args]`                                                                   | In a project that has this paackage installed |

## Dynamically Generated Sequence

#### Command

```bash
predict-v8-randomness --predictions 5 --seeds 5
```

#### Output

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

## Provide Your Own Sequence

#### Create Sequence

Generate sequence via Node REPL (among other ways):

<img width="638" alt="generate-sequence-for-cli" src="https://github.com/user-attachments/assets/3b7d68a7-57cc-466b-812c-88417539ed57" />

#### Command

Using our generated sequence from Node REPL as `--sequence`

```bash
predict-v8-randomness --predictions 5 --sequence \
0.7092287773233545 \
0.1160849838240845 \
0.03743560691248082 \
0.34682790046533585 \
0.658721801819429
```

#### Output

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

#### Validation

Generate actual random numbers and compare to `predictions` above:

<img width="638" alt="actual-next-values-for-cli" src="https://github.com/user-attachments/assets/f0926be3-7682-48a9-85e4-92574692746b" />

---

# Demos

## Node Demos

#### Dynamically Generate Sequence

https://github.com/user-attachments/assets/a80ce0d6-2c60-40c9-b7b2-2afa4bdde508

#### Provide Your Own Sequence

https://github.com/user-attachments/assets/521b69d9-672f-43b9-ab09-6b968c361668
