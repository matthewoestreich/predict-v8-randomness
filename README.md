# predict-v8-randomness
 
Predict `Math.random()` output.

To run as cmd line...(make sure packages are installed)

```
npm install
```

...then (run the tool from source)

```
node_modules/.bin/tsx v8Randomness.ts --seed-count 5 --predict-count 5
```

Output:

```
{
  "seedCount": 5,
  "predictCount": 5,
  "seedSequence": [
    0.7134811957848048,
    0.8933949518638744,
    0.26185766862051363,
    0.6793479335992929,
    0.7327865575210739
  ],
  "predictions": [
    0.1195931791130358,
    0.17242604686059093,
    0.3106798516548268,
    0.1377419535703317,
    0.1230567038495205
  ],
  "actual": [
    0.1195931791130358,
    0.17242604686059093,
    0.3106798516548268,
    0.1377419535703317,
    0.1230567038495205
  ],
  "arePredictionsCorrect": true
}
```