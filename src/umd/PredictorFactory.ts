import FirefoxRandomnessPredictor from "../Predictors/Firefox/FirefoxRandomnessPredictor";
import ChromeRandomnessPredictor from "../Predictors/Chrome/ChromeRandomnessPredictor";

export default class PredictorFactory {
  private constructor() {}

  static async create(predictor: "Firefox" | "Chrome" | "Safari", sequence: number[]) {
    switch (predictor) {
      case "Firefox": {
        return await FirefoxRandomnessPredictor.create(sequence);
      }
      case "Chrome": {
        return await ChromeRandomnessPredictor.create(sequence);
      }
      case "Safari": {
        return this;
      }
      default: {
        throw new Error("Unrecognized predictor!");
      }
    }
  }
}
