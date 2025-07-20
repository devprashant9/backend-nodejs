// const buffer = new Buffer(); // deprecated because of security issue

// const buff = new Uint8Array();

import { Buffer } from "buffer"

const buff1 = Buffer.alloc(8, 10, "utf-8")

console.log(buff1.buffer);

const buff2 = Buffer.allocUnsafe(10)
console.log(buff2.buffer); // 8192

const buff3 = Buffer.from([10, 20, 30, 40])
console.log(buff3.buffer); // 8192