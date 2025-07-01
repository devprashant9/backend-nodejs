
console.log(module.exports === exports); // true

function addNumbers(a, b) {
    return a + b;
}

exports.sum = addNumbers;

exports.difference = function (a, b) {
    return a - b;
}

// This Also Works. Why???

/*
    const module = {
        exports: {
        }
    }

    let exports = module.exports; // same reference

    exports = {}; // this will change the reference

*/