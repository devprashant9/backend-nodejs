import fs from "fs/promises"

const fileHandle = await fs.open("text.txt", "r+")
console.log(fileHandle.fd)

const buffer = await fileHandle.read()
console.log(buffer)

const value = await fileHandle.write("Hii")
console.log(value)

await fileHandle.close()