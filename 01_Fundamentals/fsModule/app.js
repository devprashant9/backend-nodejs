import fs from "node:fs/promises";

const FILE_PATH_OLD = "C:\\Users\\kumar\\Desktop\\Desktop\\Bckend_Node\\01_Fundamentals\\fsModule\\demo.txt";

const FILE_PATH_NEW = "C:\\Users\\kumar\\Desktop\\Desktop\\Bckend_Node\\01_Fundamentals\\fsModule\\demo2.txt";

// await fs.rename(FILE_PATH_OLD, FILE_PATH_NEW); // can be used to move as well

const SRC = "C:\\Users\\kumar\\Desktop\\Desktop\\Bckend_Node\\01_Fundamentals\\fsModule\\demo.txt";
const DEST = "C:\\Users\\kumar\\Desktop\\Desktop\\Bckend_Node\\01_Fundamentals\\fsModule\\demo2.txt";

// await fs.copyFile(SRC, DEST);

// await fs.unlink(DEST);

// await fs.rmdir(); // deletes only empty directory

// await fs.rm(); // deletes entire folder

const LOCATION = "C:\\Users\\kumar\\Desktop\\Desktop\\Bckend_Node\\01_Fundamentals\\fsModule";
fs.writeFile(`${LOCATION}\\newFile.txt`, "New File");

const stat = await fs.stat(DEST);
console.log(stat)
