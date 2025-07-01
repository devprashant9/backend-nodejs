console.log(module.exports);

console.log(__dirname); // absolute path to current directory
console.log(__filename); // absolute path to current file


console.log(module.children); // initially empty array

const sum = require("./sum");

console.log(module.children); // module value of sum will get stored at index 0 and so on for further included modules

