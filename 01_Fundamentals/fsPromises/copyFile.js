import fs from "node:fs/promises"

/**
 * 
 *      fs.copyFile(src, dest [,mode])
 */

async function copyFiles() {
    try {
        await fs.copyFile("appendFile.txt", "copyFile.txt")
    } catch (error) {
        console.log("Error Copying File")
    }
}

copyFiles();