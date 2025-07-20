import { Buffer } from "buffer";
import fs from "fs/promises";

const FILE_NAME = "C:\\Users\\kumar\\Desktop\\Desktop\\Bckend_Node\\assets\\lessThan.avi"


const file = await fs.readFile(FILE_NAME);

console.log(file.byteLength); // acquires the RAM