
import {Buffer, constants} from "buffer"

console.log("Buffer Pool Mmeory: ", Buffer.poolSize);

// Buffer.poolSize = 10000; // changing poolsize only applies from 2nd time

const buff1 = Buffer.allocUnsafe(1024);
console.log("Alloc UnSafe: ", buff1.byteLength);
console.log("Alloc UnSafe: ", buff1.buffer.byteLength);
console.log("Alloc UnSafe: ", buff1.byteOffset); // starting point

const buff2 = Buffer.alloc(4);
console.log("Alloc: ", buff1.byteLength);
console.log("Alloc: ", buff1.buffer.byteLength);


// gets created by default when a node program runs with a size of 8KiBi

// multiple allocUnsafe() uses Buffer.poolSize to allocate memory, given that size of each buffer created is (size >>> Buffer.poolSize) or else new gets created

// each new buffer pool gets created has a size of 8192 only


const buff3 = Buffer.allocUnsafe(4096);
// const buff4 = Buffer.allocUnsafe(4096);
console.log(buff3.buffer);


// allocUnsafe doesnt asks memory from RAM it asks from Buffer.poolSize in Node JS, thus making it faster

// Buffer.from also uses allocUnsafe()

const buff5 = Buffer.concat([buff1, buff2]);

console.log(constants.MAX_LENGTH); // maximum allocation at once
console.log(constants.MAX_STRING_LENGTH);

const buff8 = Buffer.allocUnsafeSlow(10); // dont uses Buffer.poolSize
console.log(buff8.buffer);