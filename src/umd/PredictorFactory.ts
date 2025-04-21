import FirefoxRandomnessPredictor from "../Predictors/Firefox/FirefoxRandomnessPredictor";

export default class PredictorFactory {
  constructor(predictor: "firefox" | "chrome" | "safari", sequence: number[]) {
    switch (predictor) {
      case "firefox": {
        return FirefoxRandomnessPredictor.create(sequence)
      }
      case "chrome": {
        return this;
      }
      case "safari": {
        return this;
      }
      default: {
        throw new Error("Unrecognized predictor!")
      }
    }
  }
}