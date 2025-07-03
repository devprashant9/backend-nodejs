import fs from "node:fs/promises";

/**
 *          Syntax: fs.appendFile(path, data [, options])
 * 
 *          path: String | Buffer | URL | FileHandle
 *          data: String | Buffer
 *          option: Object | String
 * 
 *                  string: If string is passed then it should be any encoding
 *                  
 *                  Object: If object is passed, then following can be values,
 * 
 *                          encoding: String | null | Default (UTF-8)
 *                          mode: integer | Default (0o666) => rw_rw_rw_
 *                          flag: String | Default (a)
 *                          flush: boolean | Default (false)
 * 
 *      flush: If it is set to true, then it will force OS to write all the data in the buffer so that it doesn't get lost
 * 
 *          return: Promise | Fulfills with undefined upon success
 */

async function appendFile() {
    try {
        await fs.appendFile("appendFile.txt", "\n🤔");
        console.log("File Appended");
    } catch (error) {
        error.message = "Empty File Path"
        console.dir(error);
    }
}
appendFile();