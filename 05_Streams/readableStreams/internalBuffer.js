import fs from "fs"

const readStream = fs.createReadStream("file.txt", {highWaterMark: 4});


// all streams has internal buffer of the capacity decided in the highWaterMark value

//  keeps on creating new internal buffer on each callback

// each internal buffer afetr the usage gets destroyed

readStream.on("readable", () => {
    
    console.log(readStream.readableLength);
    console.log(readStream.read(2));
    console.log(readStream.readableLength);

})

// readable: checks whether data got loaded on internal buffer or not


