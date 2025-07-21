import { SMALL_FILE, BIG_FILE } from "../file.js";
import fs from "fs"

console.time()
const readStream = fs.createReadStream(SMALL_FILE, { highWaterMark: 1024 * 1024 * 100 });

const writeStream = fs.createWriteStream("copyFile.avi");

readStream.on("data", (chunk) => {
    writeStream.write(chunk);
})

readStream.on("end", () => {
    console.timeEnd()
})