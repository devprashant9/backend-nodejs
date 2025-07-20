import { Buffer } from "buffer"

const buff1 = Buffer.allocUnsafe(10000);
console.log(buff1.toString());




// alloc => allocates memory and fills values with 0


// allocUnsafe => only allocates memory and is faster than alloc