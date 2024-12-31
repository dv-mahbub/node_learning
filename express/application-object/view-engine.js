const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/video", (req, res) => {
  res.render("video");
});

app.get("/new", (req, res) => {
  res.render("test/new");
});

app.listen(2, () => {
  console.log("Listening port 2");
});
