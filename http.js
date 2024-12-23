const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Bangladesh is a beautiful country.");
    res.end();
  } else if (req.url == "/about") {
    res.write("About Bangladesh");
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(3000);

// server.on("connection", () => {
//   console.log("new connection...");
// });
