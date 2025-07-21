import { SMALL_FILE, BIG_FILE } from "./file.js";







// console.time();

// // RAM => 1.8 GB,  almost file size
// // Time => 1.5s after running multiple times
// // CPU => 4.5 %

// // import fs from "fs/promises";
// // const buff1 = await fs.readFile(SMALL_FILE);

// console.timeEnd();




console.time();

import fs from "fs";

// const readStream = fs.createReadStream("file.txt");
// readStream.on("data", (chunk) => {
//     console.log(chunk);
//     console.log(chunk.byteLength); // 64kb by default
// });

// const readStream = fs.createReadStream("file.txt", {
//     highWaterMark: 16
// });
// readStream.on("data", (chunk) => {
//     console.log(chunk);
//     console.log(chunk.byteLength); // 16kb now
// });

// const readStream = fs.createReadStream(SMALL_FILE, {
//     highWaterMark: 1024 * 1024 * 100
// }); // 100MB each chunk size


const readStream = fs.createReadStream(BIG_FILE, {
    highWaterMark: 1024 * 1024 * 100
}); // 100MB each chunk size


// RAM => 211
// CPU => 11%
// Time => 5.5s
readStream.on("data", (chunk) => {
    fs.appendFileSync("small.avi", chunk);
});

readStream.on("end", () => {
    console.timeEnd();
})


