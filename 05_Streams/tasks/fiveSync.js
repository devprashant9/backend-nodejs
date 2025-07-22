
import fs from "fs"

console.time();
for (let i = 1; i <= 5000; i++) {
    if (i === 1) {
        fs.writeFileSync("fiveSync.txt", i + " ")
    } else {
        fs.appendFileSync("fiveSync.txt", i + " ",)
    }
}

console.timeEnd();

// 1.208s

