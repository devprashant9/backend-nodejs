import fs from "fs"

const fd1 = fs.openSync("fd.txt")


// we can also pass 3 directly to read() method

fs.read(fd1, (error, bytesRead, bufferData) => {
    console.log(error);
    console.log(bytesRead);
    console.log(bufferData); // entire buffer data of 16Kb
    console.log(bufferData.buffer); // 16kb
    console.log(bufferData.toString()); // trims all 0
})

// const readBuffer = Buffer.alloc(10)
// fs.open(fd1, {buffer: readBuffer, position: 2, length: 5, offset: 2}, (error, bytesRead, bufferData) => {}) // object is optional



console.log(fd1)