import fs from "fs";

const readStream = fs.createReadStream("file.txt", {highWaterMark: 16});

// console.log(readStream.readableFlowing); // default: null
// console.log(readStream.readableEnded); // default: false
// console.log(readStream.isPaused()); // default: false


readStream.on("data", (chunk) => {
    
    console.log(chunk);

    // readStream.pause()

    // console.log(readStream.readableFlowing); // false
    // console.log(readStream.readableEnded); // false
    // console.log(readStream.isPaused()); // true

})


readStream.on("end", () => {
    console.log(readStream.readableFlowing); // true
    console.log(readStream.readableEnded); // true
    console.log(readStream.isPaused()); // false
});