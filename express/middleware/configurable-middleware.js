const express = require("express");

const app = express();

const logger = (options) => {
  return function (req, res, next) {
    console.log("Middleware called");
    if (options.log) {
      next();
    } else {
      throw Error("Custom Error");
    }
  };
};

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  res.status(500).send("Middleware custom error");
};

app.use(logger({ log: true }), errorHandler);

app.get("/about", (req, res) => {
  res.send("About section");
});

app.listen(3000, () => {});
