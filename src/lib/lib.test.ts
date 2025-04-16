import { Predictor } from "./index";

describe("Lib (Node) : Dynamically Generated Sequence", () => {
  const dynamicPredictor = new Predictor(5);

  it("should predict the next random number", async () => {
    const nextPrediction = await dynamicPredictor.predictNext();
    expect(nextPrediction).toEqual(Math.random());
  });

  it("should predict the next 5 random numbers", async () => {
    const nextFive = await dynamicPredictor.predictFuture(5);
    const actualFive = Array.from({ length: 5 }, Math.random);
    expect(nextFive).toEqual(actualFive);
  });
});

describe("Lib (Node) : User Provided Sequence", () => {
  const USER_PROVIDED_SEQUENCE = [0.34976166449621826, 0.6365063365192662, 0.1561153962043036, 0.856013937923775, 0.41010231718358936];

  const EXPECTED_NEXT_NUMBER = 0.08905966816207322;

  const EXPECTED_NEXT_FIVE_NUMBERS = [0.30334558505429565, 0.40213861949121776, 0.9458201944286209, 0.8958730034145181, 0.3638471711087039];

  const providedPredictor = new Predictor(USER_PROVIDED_SEQUENCE);

  it("should predict the next random number", async () => {
    const nextPrediction = await providedPredictor.predictNext();
    expect(nextPrediction).toEqual(EXPECTED_NEXT_NUMBER);
  });

  it("should predict the next five random numbers", async () => {
    const nextFive = await providedPredictor.predictFuture(5);
    expect(nextFive).toEqual(EXPECTED_NEXT_FIVE_NUMBERS);
  });
});
