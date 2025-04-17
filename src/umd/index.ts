/**
 * Shim so we can use this in the browser.
 */
import Predictor from "../lib/Predictor";
import { Buffer } from "buffer";

export default { Predictor };
export { Predictor };

window.Buffer = Buffer;
