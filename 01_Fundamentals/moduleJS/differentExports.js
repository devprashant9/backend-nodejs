export const num = 10; // named export
export const str = "Hello"; // named export

function multiply(a, b) {
  return a * b;
}

export {multiply as product}; // named export with alias

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
