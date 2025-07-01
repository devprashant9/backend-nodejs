function loadModule(path) {
    const fs = require("fs");
    const fileData = fs.readFileSync(path).toString();

    return (function (send) {
        eval(fileData);
        // the code inside "./customRequireTest.js" will be placed here. We can imagine that
        return send;
    })({}); // returning IIFE so that vale can be sent from where the loadModule() was called
}

const test = loadModule("./customRequireTest.js")
console.log(test);
