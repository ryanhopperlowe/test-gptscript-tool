import { getRandomNumber } from "./src/randomNumber.js";

const min = isNaN(+process.argv[2]) ? 1 : +process.argv[2];
const max = isNaN(+process.argv[3]) ? 100 : +process.argv[3];

console.log(getRandomNumber(min, max));
