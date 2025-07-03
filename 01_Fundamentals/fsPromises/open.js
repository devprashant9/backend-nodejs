import fs from "node:fs/promises"

const fileHandle = await fs.open("appendFile.txt");
console.log(fileHandle)

await fileHandle.close();

// gives more control over file to work with