const express = require("express");

const file = require("fs");

const app = express();

app.get("/file", (req, res, next) => {
  file.readFile("/example_file", (error, data) => {
    if (error) {
      next(error);
    } else {
      res.send(data);
    }
  });
});

app.use((error, req, res, next) => {
  res.status(500).send({ error: error.message });
});

app.listen(3000, () => {
  console.log("Listening to 3000");
});
