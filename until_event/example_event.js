const exp = require("constants");
const EventEmitter = require("events");
class ExampleEvent extends EventEmitter {
  event() {
    this.on("example", (eventNo, eventName) => {
      console.log(`event has occured (${eventNo}): "${eventName}"`);
    });
  }
}
module.exports = ExampleEvent;
