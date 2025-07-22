
import fs from "fs"

console.time();
for (let i = 1; i <= 100000; i++) {
    if (i === 1) {
        fs.writeFileSync("lakhSync.txt", i + " ")
    } else {
        fs.appendFileSync("lakhSync.txt", i + " ",)
    }
}

console.timeEnd();

// 24.090 sec

