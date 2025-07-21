import fs, { read } from "fs";
import { BIG_FILE } from "../file.js"


const readStream = fs.createReadStream(BIG_FILE, { highWaterMark: 1024 * 1024 });

const writeStream = fs.createWriteStream("copyFile.avi", { highWaterMark: 1024 * 1024 });

readStream.on("data", (chunk) => {
    const isEmpty = writeStream.write(chunk);
    if (!isEmpty) {
        readStream.pause();
    }
});

writeStream.on("drain", () => {
    readStream.resume();
})