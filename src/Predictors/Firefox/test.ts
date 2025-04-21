import FirefoxRandomnessPredictor from "./FirefoxRandomnessPredictor";

const ORIGINAL_SEQUENCE = [
  0.6001352587932771,
  0.3250225488841686,
  0.2681294834228445,
  0.7019064719602867,
  0.5599697355474599,
]

const ORIGINAL_EXPECTED = [
  0.5837681703073178,
  0.18128470048076706,
  0.2553924400843819,
  0.2388525040412779,
  0.9099321641840764,
]

const sequence = [
  0.1321263101773572,
  0.03366887439746058,
  0.032596957696410134,
  0.9986575482138969,
]

const expected = [
  0.8479779907956815,
  0.13963871472821332,
  0.25068024611907636,
  0.6656237481612675,
  0.7381091878692425,
  0.8709382509549467,
  0.49171337524788294,
  0.6991749430716799,
  0.9530887478758369,
  0.781511163650037,
  0.699311162730038
];

main();
async function main() {
  const pred = await FirefoxRandomnessPredictor.create(sequence);
  const results: any[] = [];
  for (let i = 0; i < expected.length; i++) {
    const predicted = await pred.predictNext();
    const correct = predicted === expected[i];
    results.push({ correct, predicted, expected: expected[i] });
  }
  console.log(results);
}