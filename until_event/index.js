const path = require("path");
const os = require("os");
const fs = require("fs");

const myPath = path.join(__dirname, "index.js");
const customPath = "C:/Users/DhakaApps/node_projects/node_tutorial/index.js";
// console.log(myPath);
// console.log(path.dirname(myPath));
console.log(path.basename(customPath));
// console.log(path.parse(customPath));

console.log(os.platform());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os.release());
// console.log(os.networkInterfaces());
// console.log(os.arch());
// console.log(os.type());

// //fs async
// fs.writeFileSync("test.txt", "Hello World!");
// fs.appendFileSync("test.txt", "\nAppend text.");
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);

//fs sync
fs.writeFile("test.txt", "Hello World!", (err) => {
  if (err) throw err;
  fs.appendFile("test.txt", "\nAppend text.", (err) => {
    if (err) throw err;
    fs.readFile("test.txt", "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});
console.log("last line code of FS");

// //Event Emitter
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("example", (eventNo, eventName) => {
//   console.log(`event has occured (${eventNo}): "${eventName}"`);
// });
// setTimeout(() => {
//   console.log("\n.........................");
//   eventEmitter.emit("example", 1, "First Event");
//   console.log(".........................\n");
// }, 1500);

//Event Emitter from different module
const ExampleEvent = require("./example_event");
const exampleEvent = new ExampleEvent();
exampleEvent.event();
setTimeout(() => {
  console.log("\n.........................");
  exampleEvent.emit("example", 2, "Second Event");
  console.log(".........................\n");
}, 1500);
