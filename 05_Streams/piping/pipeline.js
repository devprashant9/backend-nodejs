import fs from "fs";
import { BIG_FILE } from "../file.js"

import { pipeline } from "stream";

const readStream = fs.createReadStream(BIG_FILE, { highWaterMark: 1024 * 1024 });

const writeStream = fs.createWriteStream("copyFile.avi", { highWaterMark: 1024 * 1024 });

pipeline(readStream, writeStream, (err) => {
    console.log(err.message);
})

