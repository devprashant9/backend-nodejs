import http from "http"

import fs from "fs/promises"



const server = http.createServer(async (req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("Content-Type", "text/txt");

    // res.end("Hello World");

    const fileHandle = await fs.open("text.txt");
    const readStream = fileHandle.createReadStream({ highWaterMark: 1 });

    readStream.on("data", (chunk) => {
        res.write(chunk.toString())
        readStream.pause();

        setTimeout(() => {
            readStream.resume()
        }, 100);
    })



    readStream.on("end", () => {
        res.end();
    })
})


server.listen(3000, "localhost", () => {
    console.log("Server Started")
})