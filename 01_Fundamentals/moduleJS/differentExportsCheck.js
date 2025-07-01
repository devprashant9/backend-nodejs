import {num as number, str, product as multiply, divide} from "./differentExports.js";

console.log(`The number is: ${number}`);
console.log(`The string is: ${str}`);

const a = 5;
const b = 10;
const result = multiply(a, b);
console.log(`The product of ${a} and ${b} is: ${result}`);

try {
  const divisionResult = divide(a, b);
  console.log(`The division of ${a} by ${b} is: ${divisionResult}`);
} catch (error) {
  console.error(error.message);
}
