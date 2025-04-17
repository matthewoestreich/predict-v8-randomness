import { runPredictor } from "./runPredictor";

describe("Bin (CLI) : Dynamically Generated Sequence", () => {
  it("should predict the next five random numbers", async () => {
    const result = await runPredictor({ predictions: 5 });
    expect(result.mode).toBe("seeds");
    expect(result.predictions).toEqual(result.actual);
  });
});

describe("Bin (CLI) : User Provided Sequence", () => {
  it("should predict the next five random numbers", async () => {
    const USER_PROVIDED_SEQUENCE = [0.36280726230126614, 0.32726837947512855, 0.22834780314989023, 0.18295517908119385];
    const EXPECTED_NEXT_FIVE_NUMBERS = [0.8853110028441145, 0.14326940888839124, 0.035607792006009165, 0.6491231376351401, 0.3345277284146617];

    const result = await runPredictor({ sequence: USER_PROVIDED_SEQUENCE, predictions: 5 });
    expect(result.mode).toBe("sequence");
    expect(result.predictions).toEqual(EXPECTED_NEXT_FIVE_NUMBERS);
  });
});
