console.log("Hello World")


process.stdin.on("data", (chunk) => {
    console.log(chunk.toString())
})