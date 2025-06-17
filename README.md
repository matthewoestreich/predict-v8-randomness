# PLEASE USE THIS REPO INSTEAD

# [js-randomness-predictor](https://github.com/matthewoestreich/js-randomness-predictor)

<br/></br>

---

---

---

---

<br/><br/>

# predict-v8-randomness

A huge shout-out to [PwnFunction](https://github.com/PwnFunction/v8-randomness-predictor) for the inspiration!

`predict-v8-randomness` uses [`z3`](https://github.com/Z3Prover/z3) — a [Satisfiability Modulo Theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories) (SMT) solver developed by Microsoft — to predict the output of `Math.random()` in [V8](https://v8.dev/), the JavaScript engine used by Chrome and Node.js.

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

Use with CommonJS or ESM

#### CJS

```js
const predictV8Randomness = require("predict-v8-randomness");
const predictor = new predictV8Randomness.Predictor(...);
// or
const { Predictor } = require("predict-v8-randomness");
const predictor = new Predictor(...);
```

#### ESM

```js
import predictV8Randomness from "predict-v8-randomness";
const predictor = new predictV8Randomness.Predictor(...);
// or
import { Predictor } from "predict-v8-randomness";
const predictor = new Predictor(...);
```

# Usage

For every 10 predictions it takes ~3 seconds to compute, so be mindful of performance when predicting large amounts. Keep in mind, the max we can predict next is 60.

We always return an array of predictions (`number[]`). If you are only predicting one item you can destructure the return for simplicity.

#### Dynamically Generated Sequence

```js
// If no parameters are provided, we generate the sequence dynamically
const predictor = new Predictor();

// Predict next Math.random() output. Destructure return.
const [nextRand] = predictor.predictNext();
// is equivalent to:
const [nextRand] = predictor.predictNext(1);
// Validate prediction right now, right here, in real time.
console.log("Accurate?", nextRand === Math.random());

// Predict next 10 Math.random() outputs
const nextTenRand = predictor.predictNext(10);
const actuals = Array.from({ length: 10 }, Math.random);
// Validate those 10
console.log(
  "Accurate?",
  nextTenRand.every((e, i) => actuals[i] === e),
);
```

#### Provide Your Own Seed Sequence

The provided sequence must contain **_EXACTLY_** 4 numbers. Anything other than 4 and we lose prediction accuracy.

```js
const initialSequence = [
  /* Your sequence here */
  /* HAS to be 4 numbers */
];
const predictor = new Predictor(initialSequence);
const [nextRand] = predictor.predictNext();
// Where N <= 60 && N > 0
const futureN = predictor.predictNext(N);
```

---

# CLI

You can use the following methods to run as CLI

| Method             | Instructions                                                                                                         | Info                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `npx`              | `> npx predict-v8-randomness [args]`                                                                                 | Probably the simplest method                  |
| Global `npm`       | <ul><li><code>> npm i -G predict-v8-randomness</code></li><li> <code>> predict-v8-randomness [args]</code></li></ul> | Can run from any terminal on your machine     |
| Local Project Path | `> node_modules/.bin/predict-v8-randomness [args]`                                                                   | In a project that has this paackage installed |

#### Dynamically Generated Sequence

##### Command

```bash
predict-v8-randomness --predictions 5
```

##### Output

```
{
  generatedSequence: [
    0.3408102678742442,
    0.08789933352314194,
    0.03272179228873395,
    0.4842101806240975
  ],
  predictions: [
    0.18459229023584944,
    0.00115362787609663,
    0.2168134565216322,
    0.4505911192744063,
    0.0861285118521693
  ],
  actual: [
    0.18459229023584944,
    0.00115362787609663,
    0.2168134565216322,
    0.4505911192744063,
    0.0861285118521693
  ],
  isCorrect: true
}
```

#### Provide Your Own Sequence

Generate sequence via Node REPL (among other ways):

<img width="638" alt="generate-sequence-for-cli" src="https://github.com/user-attachments/assets/3b7d68a7-57cc-466b-812c-88417539ed57" />

##### Command

Using our generated sequence from Node REPL as `--sequence`

```bash
predict-v8-randomness --predictions 5 --sequence \
0.7491279279338094 \
0.44015510494242127 \
0.7346597255565754 \
0.36002618846830314
```

##### Output

```
{
  sequence: [
    0.7491279279338094,
    0.44015510494242127,
    0.7346597255565754,
    0.36002618846830314
  ],
  predictions: [
    0.6959327841483642,
    0.04084705024171864,
    0.16434259075016922,
    0.8110024854456912,
    0.023498283488221583
  ],
  actual: "You'll need to get this yourself via the same way you generated the sequence"
}

```

##### Validation

Generate actual random numbers and compare to `predictions` above:

<img width="638" alt="actual-next-values-for-cli" src="https://github.com/user-attachments/assets/f0926be3-7682-48a9-85e4-92574692746b" />
