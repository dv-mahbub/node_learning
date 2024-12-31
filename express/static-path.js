const express = require("express");
const path = require("path");

//express declaration
const app = express();
app.use(express.json());

//static content
const staticPath = path.join(__dirname, "../public");
app.use(
  express.static(staticPath, {
    index: "home.html",
  })
);

//router
const router = express.Router({
  caseSensitive: true,
});
app.use(router);
router.get("/about", (req, res) => {
  res.send("This is about section");
});

//api
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
