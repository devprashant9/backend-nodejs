import fsPromises from "fs/promises";


import fs from "fs"

setTimeout(() => {
    console.log("HIII")
}, 0)

// async IO
// const fileContent = await fsPromises.readFile("file.txt", "utf-8");
// console.log(fileContent);


// Synx IO
const fileContent = fs.readFileSync("file.txt", "utf-8");
console.log(fileContent);


