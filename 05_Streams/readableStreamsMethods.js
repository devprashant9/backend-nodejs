import fs from "fs"

const readStream = fs.createReadStream("file.txt", {highWaterMark: 4});
readStream.setEncoding("utf-8")

readStream.on("data", (chunk) => {

    console.log(chunk)

})

readStream.destroy("destroyed");

readStream.on("end", () => {
    console.log("Ended")
})

readStream.on("error", (data) => {
    console.log(data)
})

readStream.on("close", () => {
    console.log("Stream Closed")
})


