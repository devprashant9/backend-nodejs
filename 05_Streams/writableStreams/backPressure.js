import { SMALL_FILE, BIG_FILE } from "../file.js";
import fs from "fs"

console.time()
const readStream = fs.createReadStream(SMALL_FILE, { highWaterMark: 1024 * 1024 });

const writeStream = fs.createWriteStream("copyFile.avi", { highWaterMark: 1024 * 1024 });

readStream.on("data", (chunk) => {
    const bool = writeStream.write(chunk);
    if (bool === false) {
        readStream.pause();
    }
})

writeStream.on("drain", () => {
    readStream.resume()
})

readStream.on("end", () => {
    console.timeEnd()
})