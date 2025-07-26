import dgram from 'dgram';

const socket = dgram.createSocket("udp4"); // returns event emitter

socket.on("message", (buffer, remoteAddress) => {
    console.log(buffer.toString("utf-8"));
    console.log(remoteAddress);

    socket.send("Message Received on Server", remoteAddress.port, remoteAddress.address);
});

// socket.on("listening", () => {
//     console.log(socket.address());
//     console.log("Listening");
// });

// socket.bind(); // starts server on a random port. fires "listening" event

socket.bind({ port: 4000, address: "127.0.0.1" }, () => {
    console.log(socket.address());
    console.log("Listening");
}); // more controlled way

// if we use bind() it acts as server