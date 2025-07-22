import {SMALL_FILE} from "../file.js"

import fs from "fs"

const readStream = fs.createReadStream(SMALL_FILE);

readStream.pipe(process.stdout);