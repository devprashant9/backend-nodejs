import fs from "fs";

const readStream = fs.createReadStream("file.txt", { highWaterMark: 1 });

let readCount = 0;
readStream.on("data", (chunk) => {
    readCount++;

    // readStream.bytesRead === readStream.readableHighWaterMark
    if (readCount === 1) {
        fs.writeFileSync("small.txt", chunk);
    } else {
        fs.appendFileSync("small.txt", chunk);
    }

    readStream.pause();

    setTimeout(() => {
        readStream.resume();
    }, 100);
})

readStream.on("resume", () => {
    console.log("Resumed")
})

readStream.on("pause", () => {
    console.log("Paused");
})