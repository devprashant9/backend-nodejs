import EventEmitter from "events";
// import { emit } from "process";

const emitter = new EventEmitter();
console.log(emitter);

emitter.on("read", (e) => {
    console.log("Event Fired 1")
});

emitter.on("read", (e) => {
    console.log("Event Fired 2")
});

emitter.once("write", () => {
    console.log("Write Event")
})

// console.log(emit); // array of events and fires sequentially

emitter.emit("read") // firing event

emitter.emit("write") // this is fired
emitter.emit("write") // not fired because of once

