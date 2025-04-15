import { Predictor } from "./index";

async function main() {
	const seed = Array.from({ length: 5 }, Math.random);
	const pred = new Predictor(seed);
	const predictions = await pred.predictFuture(3);
	const actuals = Array.from({ length: 3 }, Math.random);
	console.log({ predictions, actuals });
}
main();
