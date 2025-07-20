const buff = new ArrayBuffer(10);

// const buff = new ArrayBuffer(10, {maxByteLength: 16}) // resizable
// const b = buff.transfer() // detach becomes true for buff

const view = new DataView(buff);

// writing multi bytes

view.setInt8(0, 289); // stores data only upto 8th bit and trims down rest
console.log(view.getInt8(0)); // thus stores only trimmed value

view.setInt16(1, 289); // it will set 2 bytes. writes as Big Endian
console.log(view.getInt16(1));  // return proper value

view.setInt16(3, 279, true);

