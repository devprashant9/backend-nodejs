import {Buffer} from "buffer";

const buff1 = Buffer.alloc(4);
buff1[0] = 97;

console.log(buff1.at(0));
console.log(buff1.toString("utf-8"))

buff1.write("ABC")
console.log(buff1.toString());

const obj = buff1.toJSON();
console.log(obj)