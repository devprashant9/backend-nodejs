const value = import.meta;

console.log(value);

console.log(value.filename); // Full path to the current file
console.log(value.dirname); // Directory name of the current file
console.log(value.url); // URL of the current file

console.log(typeof import.meta); // "object", thus we can add properties to it
import.meta.customProperty = "This is a custom property";