import { spawn } from "child_process";

import fs from "fs"


const writeStream = fs.createWriteStream("copyFile.avi");

const parentData = spawn("node", ["parent.js"]);

parentData.stdout.pipe(writeStream);

