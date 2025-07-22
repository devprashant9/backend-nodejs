import fs from "fs/promises"
import {SMALL_FILE} from '../file.js'

const fileHandle1 = await fs.open(SMALL_FILE);
const readStream = fileHandle1.createReadStream();

const fileHandle2 = await fs.open("copyFile.avi", "w");
const writeStream = fileHandle2.createWriteStream();

readStream.pipe(writeStream);

writeStream.on("finish", () => {
    console.log("Finished Copying")
})