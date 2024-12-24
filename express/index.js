const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello string");
});
app.post("/", (req, res) => {
  console.log(req.body["name"]);
  console.log(req.body.hobbies.first);
  if (!req.body.hobbies.second) {
    return res.send("error");
  }
  res.send("Hello post");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
