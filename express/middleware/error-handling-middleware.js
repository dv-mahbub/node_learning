const express = require("express");

const app = express();

const firstMiddleware = (req, res, next) => {
  console.log("First middleware called");
  throw Error("Custom Error");
};

const errorHandler = (error, req, res, next) => {
  //   console.log("Error handler called");
  console.log(error.message);
  res.status(500).send("Middleware custom error");
};

app.use(firstMiddleware, errorHandler);

app.get("/about", (req, res) => {
  res.send("About section");
});

app.listen(3000, () => {});
