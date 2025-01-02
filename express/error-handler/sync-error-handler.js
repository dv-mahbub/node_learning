const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Homepage");
});

app.get("/error", function (req, res) {
  res.send(number);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send({
    error: error.message,
  });
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
