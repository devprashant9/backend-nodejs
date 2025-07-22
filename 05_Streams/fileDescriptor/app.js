import fs from "fs"



console.log(process.stdin.fd)
console.log(process.stdout.fd)
console.log(process.stderr.fd)

fs.open("text.txt", (err, fd) => {
    console.log(fd)
})

fs.open("num.txt", (err, fd) => {
    console.log(fd)
})

const fd1 = fs.openSync("num.txt")
const fd2 = fs.openSync("num.txt")

console.table([fd1, fd2])