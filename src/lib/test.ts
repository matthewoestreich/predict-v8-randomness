import {PredictV8Randomness} from "./PredictV8Randomness";

async function main() {
	const seed = Array.from({ length: 5 }, Math.random);
	const pred = new PredictV8Randomness(seed);
	const predictions = await pred.predictFuture(3);
	const actuals = Array.from({ length: 3 }, Math.random);
	console.log({ predictions, actuals });
}
main();
