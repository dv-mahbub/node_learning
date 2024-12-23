const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/big_data.txt", "utf-8");
let i = 0;
readStream.on("data", (chunk) => {
  //   console.log(`new chunk received: ${++i}`);
  console.log(chunk);
  i++;
});
setTimeout(() => {
  console.log("total chunk: " + i);
}, 2000);
