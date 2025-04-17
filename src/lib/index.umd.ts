/**
 * Shim so we can use this in the browser.
 */
import Predictor from "./Predictor";
import { Buffer } from "buffer";

export default { Predictor };
export { Predictor };

window.Buffer = Buffer;