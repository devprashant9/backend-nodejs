import fs from 'fs'

const writeStream = fs.createWriteStream("lakhStreams.txt");

console.time();
for (let i = 1; i <= 100000; i++) {
    writeStream.write(i + " ");
}

writeStream.end();

writeStream.on("finish", () => {
    console.timeEnd()
})

// 276 ms