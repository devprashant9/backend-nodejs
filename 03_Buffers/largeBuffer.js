const buff = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);

const view = new DataView(buff);

console.log(view.byteLength)

for(let i = 0; i < view.byteLength; i++) {
    view.setInt8(i, i + 1);
}

console.log("Writing Done")
console.log()