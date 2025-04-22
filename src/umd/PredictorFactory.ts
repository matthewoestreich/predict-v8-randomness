import FirefoxRandomnessPredictor from "../Predictors/Firefox/FirefoxRandomnessPredictor";

export default class PredictorFactory {
  private constructor() {}

  static async create(predictor: "Firefox" | "Chrome" | "Safari", sequence: number[]) {
    switch (predictor) {
      case "Firefox": {
        return await FirefoxRandomnessPredictor.create(sequence);
      }
      case "Chrome": {
        return this;
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
