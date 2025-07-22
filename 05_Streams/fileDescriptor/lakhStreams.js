import fs from 'fs';

const writeStream = fs.createWriteStream("lakhStreams.txt");

console.time();

let i = 1;

function write() {
    let ok = true;
    while (i <= 100000 && ok) {
        ok = writeStream.write(i + " ");
        i++;
    }
    if (i <= 100000) {
        // Wait for 'drain' before writing more
        writeStream.once('drain', write);
    }
}

write();

writeStream.end();

writeStream.on("finish", () => {
    console.timeEnd();
});
