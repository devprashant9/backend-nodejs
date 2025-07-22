import fs from 'fs'

const writeStream = fs.createWriteStream("fiveStreams.txt");

console.time();
for (let i = 1; i <= 5000; i++) {
    writeStream.write(i + " ");
}

writeStream.end();

writeStream.on("finish", () => {
    console.timeEnd()
})

// 40ms