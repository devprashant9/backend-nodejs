function addNumbers(a, b) {
    return a + b;
}

console.log(module.exports); // empty object, thus

// write function and then add property
module.exports.sum = addNumbers;

// directly add property and value
module.exports.difference = function (a, b) {
    return a - b;
}