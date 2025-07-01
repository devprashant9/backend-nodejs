import {addNumbers} from './sum.js'; // named export must be imported with the same name

const numbers = [1, 2, 3, 4, 5];
const sum = addNumbers(...numbers);
console.log("The Sum is: ", sum);