import fs from "node:fs/promises";

const buff = new Uint8Array(8);

const str = "Prashant";

for (let i = 0; i < str.length; i++) {
    buff[i] = str.charCodeAt(i); // writes in decimal
}
// console.log(buff);

// const decoder = new TextDecoder();
await fs.writeFile("./decode.txt", buff)
