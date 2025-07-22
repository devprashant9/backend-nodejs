import fs from "fs"

const fd = fs.openSync("text.txt", "w"); // read mode default

fs.writeSync(fd, "Hii")