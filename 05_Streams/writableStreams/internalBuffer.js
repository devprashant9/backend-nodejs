// import fs from 'fs'

// const writeStream = fs.createWriteStream("copyFile.avi", {highWaterMark: 1024 * 1024});

// console.log(writeStream.writableHighWaterMark)




import fs from "fs"

const writeStream = fs.createWriteStream("copyFile.avi", {highWaterMark: 4});

const val1 = writeStream.write("A")
const val2 = writeStream.write("A")
const val3 = writeStream.write("A")
const val4 = writeStream.write("A")


console.log(writeStream.writableLength);
console.log(val4)