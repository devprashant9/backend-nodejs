import EventEmitter from "events";

class MyEvent {
    constructor() {
        this._events = {}
    }

    on(eventName, eventHandler) {
        if (this._events[eventName]) {
            this._events[eventName].push(eventHandler);
        } else {
            this._events[eventName] = [eventHandler];
        }
    }

    emit(eventName) {
        if (this._events[eventName]) {
            this._events[eventName]?.forEach(element => {
                element()
            });
        }
    }
}

const event = new MyEvent();
event.on("save", () => {
    console.log("Save Event")
})

event.emit("save")