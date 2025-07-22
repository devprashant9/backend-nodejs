import fs from "fs";

const buff = Buffer.allocUnsafe(16 * 1024); // 16KB buffer
const fd = fs.openSync("numbers2.txt", "w");

console.time();

let totalBytesWritten = 0;

for (let i = 1; i <= 100000; i++) {
    const str = i + " ";
    const bytesWritten = buff.write(str, totalBytesWritten);

    const writtenByteDiff = str.length - bytesWritten;
    totalBytesWritten += bytesWritten;

    // If not all bytes were written, flush current buffer and write the remaining part
    if (writtenByteDiff > 0) {
        fs.writeSync(fd, buff, 0, totalBytesWritten);
        totalBytesWritten = 0;

        // Write the leftover part to the beginning of buffer
        buff.write(str.slice(bytesWritten), totalBytesWritten);
        totalBytesWritten += writtenByteDiff;
    }

    // If buffer is full, flush it
    if (totalBytesWritten === buff.byteLength) {
        fs.writeSync(fd, buff, 0, totalBytesWritten);
        totalBytesWritten = 0;
    }
}

// Flush any remaining bytes in the buffer
if (totalBytesWritten > 0) {
    fs.writeSync(fd, buff, 0, totalBytesWritten);
}

fs.closeSync(fd);

console.timeEnd();
