// it's an IIFE function
// Node JS wraps our code inside this IIFE before running
// thus we have access to variables like, __filename, __dirname, etc.
// take help from chatGPT to understand working

(function (exports, require, module, __filename, __dirname) {

    function sayHello() {
        console.log("Hello World");
    }
    module.exports = sayHello;

})(exports, require, module, __filename, __dirname);

// since variables are wrapped inside a function they are in local scope
// it prevents clash of variable names in other modules