import { BIG_FILE, SMALL_FILE } from "./file.js";

import fs from "fs/promises";
import { Buffer } from "buffer";



const buff1 = await fs.readFile(SMALL_FILE); // less than 2Gib

// const buff2 = await fs.readFile(BIG_FILE); // greater than 2Gib, GIVES ERROR WHILE READING

const buff = await fs.readFile("file.txt", "utf-8"); // small file

console.log(buff);

