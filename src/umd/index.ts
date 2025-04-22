/**
 * Shim so we can use this in the browser.
 */
import PredictorFactory from "./PredictorFactory";
import { Buffer } from "buffer";

export default { PredictorFactory };
export { 
  PredictorFactory
};

window.Buffer = Buffer;


/**
 * Shim so we can use this in the browser.
 */
/*
import * as z3 from "z3-solver";
import Predictor from "../lib/Predictor";
import { Buffer } from "buffer";

declare global {
  interface Window { 
    z3Promise: ReturnType<typeof z3.init>;
  }
}

export { 
  Predictor,
};

window.Buffer = Buffer;
window.z3Promise = z3.init();
*/