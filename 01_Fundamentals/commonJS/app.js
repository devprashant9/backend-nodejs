const sum = require("./sum"); // known as module

const res = sum(10, 20, 30, 40, 50);
console.log("The Sum is: ", res);

const {difference, product} = require("./maths"); // related module

const diff = difference(10, 20, 30, 40, 50);
console.log("The Difference is: ", diff);

const prod = product(10, 20, 30, 40, 50);
console.log("The Product is: ", prod);