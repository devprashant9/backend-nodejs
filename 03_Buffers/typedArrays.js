

// Typed Array Groups

/**
 *      Int8Array
 *      Int16Array
 *      Int32Array
 *      BigInt64Array
 * 
 *      Uint8Array
 *      Uint8lampedArray
 *      Uint16Array
 *      Uint32Array
 *      BigUint64Array
 * 
 *      We have same for float also
 * 
 *    all array methods except for onces that modifies the array i.e. push(), pop()
 */



const buff = new ArrayBuffer(8); 

const uInt8Array = new Uint8Array(buff); // bytes must be multiple of 1
const uInt16Array = new Uint16Array(buff); // bytes must be multiples of 2
const uInt32Array = new Uint32Array(buff); // bytes must be multiples of 4

// console.log(uInt8Array)
// console.log(uInt16Array)
// console.log(uInt32Array)

// uInt8Array[0] = 1;  // same as array
// console.log(uInt8Array[0]); // same as array
// console.log(uInt16Array[0]); // same as array
// console.log(uInt32Array[0]); // same as array



// automatically creates the buffer array
const newBuff = new Uint8Array(4);
newBuff.fill(10)
console.log(newBuff)