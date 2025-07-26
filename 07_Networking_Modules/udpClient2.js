import dgram from 'dgram'

const socket = dgram.createSocket("udp4");

socket.send("Hello From Client 2 ", 4000, "127.0.0.1");

socket.on("message", (buffer, remoteAddress) => {
    console.log(buffer.toString("utf-8"));
    console.log(remoteAddress);
});