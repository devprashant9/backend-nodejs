import fs from "fs";

// const writeStream = fs.createWriteStream("file.txt");
const writeStream = fs.createWriteStream("file.txt", {highWaterMark: 24});

console.log(writeStream.writableHighWaterMark)

writeStream.write("ABC ")
writeStream.write("ABC ")
writeStream.write("ABC ")
writeStream.write("ABC ")