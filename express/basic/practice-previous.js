const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const router = express.Router();
app.use(router);

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

router.get("/about", (req, res) => {
  res.send("This is about page");
});

router.post("/about", (req, res) => {
  res.send("Hello Mr. " + req.body.name);
});

app.listen(2, () => {
  console.log("Server is running on port 2");
});
