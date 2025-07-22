import fs from "fs";

console.time();

let completed = 0;
const total = 5000;

// Step 1: Write the first number
fs.writeFile("fiveCallBack.txt", "1 ", (err) => {
    if (err) throw err;

    completed++;

    // Step 2: Append rest
    for (let i = 2; i <= total; i++) {
        fs.appendFile("fiveCallBack.txt", i + " ", (error) => {
            if (error) throw error;

            completed++;

            if (completed === total) {
                console.log("Data Successfully Written");
                console.timeEnd();
            }
        });
    }
});


// 1.263s

