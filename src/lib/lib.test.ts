import V8RandomnessPredictor from "../Predictors/V8/V8RandomnessPredictor";

describe("Lib (Node) : Dynamically Generated Sequence", () => {
  const dynamicPredictor = new V8RandomnessPredictor();

  it("should predict the next random number", async () => {
    const [nextPrediction] = await dynamicPredictor.predictNext();
    expect(nextPrediction).toEqual(Math.random());
  });

  it("should predict the next 5 random numbers", async () => {
    const nextFive = await dynamicPredictor.predictNext(5);
    const actualFive = Array.from({ length: 5 }, Math.random);
    expect(nextFive).toEqual(actualFive);
  });
});

describe("Lib (Node) : User Provided Sequence", () => {
  const USER_PROVIDED_SEQUENCE = [0.36280726230126614, 0.32726837947512855, 0.22834780314989023, 0.18295517908119385];
  const EXPECTED_NEXT_NUMBER = 0.8853110028441145;
  const EXPECTED_NEXT_FIVE_NUMBERS = [0.14326940888839124, 0.035607792006009165, 0.6491231376351401, 0.3345277284146617, 0.42618019812863417];

  const providedPredictor = new V8RandomnessPredictor(USER_PROVIDED_SEQUENCE);

  it("should predict the next random number", async () => {
    const [nextPrediction] = await providedPredictor.predictNext();
    expect(nextPrediction).toEqual(EXPECTED_NEXT_NUMBER);
  });

  it("should predict the next five random numbers", async () => {
    const nextFive = await providedPredictor.predictNext(5);
    expect(nextFive).toEqual(EXPECTED_NEXT_FIVE_NUMBERS);
  });
});
