import fs from "fs"



const writeStream = fs.createWriteStream("copyFile.txt")

writeStream.write("A")
writeStream.write("A")
writeStream.write("A")
writeStream.write("A")

writeStream.close()

writeStream.on("finish", () => {
    console.log("Writing Finished")
});  // doesn't runs unless closed