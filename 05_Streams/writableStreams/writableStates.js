import fs from "fs"


const writeStream = fs.createWriteStream("copyFile.txt");

console.log(writeStream.writable); // goes to writable state

writeStream.end()

console.log(writeStream.writable);

console.log(writeStream.writableCorked) // 0 = corked else NOT

// calling cork() prevents writestream from writing into disk and keeps in internal buffer
//  to resume call uncork()

// we can cork() multiple times and need to call uncork() multiple times as well