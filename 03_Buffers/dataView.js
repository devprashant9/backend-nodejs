// DataView is used to manipulate ArrayBuffer
// multiple DataView can be pointed to a Single ArrayBuffer
// we can store any type of values
// using signed and unsigned function we can store negative values as well

const buff1 = new ArrayBuffer(8);

const view1 = new DataView(buff1);
const view2 = new DataView(buff1, 5);

view1.setInt8(0, 0x45); // no endianess available for single byte
view2.setInt8(0, -187);

console.log(view1.buffer);
console.log(view2.buffer);

