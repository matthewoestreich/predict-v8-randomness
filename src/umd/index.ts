/**
 * Shim so we can use this in the browser.
 */
import PredictorFactory from "./PredictorFactory";
import { Buffer } from "buffer";

export default { PredictorFactory };
export { PredictorFactory };

window.Buffer = Buffer;
