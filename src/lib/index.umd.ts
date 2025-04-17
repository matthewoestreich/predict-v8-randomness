/**
 * Shim so we can use this in the browser.
 */
import ".";
import { Buffer } from "buffer";

window.Buffer = Buffer;