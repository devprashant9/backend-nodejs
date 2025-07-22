import fs from "fs"

const fd = fs.openSync("text.txt", "w");

fs.write(fd, "👍", (error, bytesWritten, str ) => {
    console.log(error)
    console.log(bytesWritten)
    console.log(str)
})