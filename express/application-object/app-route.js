const express = require("express");

const app = express();

app.use(express.json());

app
  .route("/helloworld")
  .get((req, res) => {
    res.send("Selected Get method");
  })
  .post((req, res) => {
    res.send("Selected Post method");
  })
  .put((req, res) => {
    res.send("Selected Put method");
  })
  .delete((req, res) => {
    res.send("Selected Delete method");
  })
  .patch((req, res) => {
    res.send("Selected Patch method");
  });

app.listen(2, () => {
  console.log("listening to port 2");
});
