// console.log(process.stdin)
// console.log(process.stdout)
// console.log(process.stderr)

import fs from "fs"

const writStream = fs.createWriteStream("file.txt", "utf-8");

process.stdin.pipe(writStream)

console.log(process.stdin.fd)
console.log(process.stdout.fd)
console.log(process.stderr.fd)



// stdin => 0
// stdout => 1
// stderr => 2