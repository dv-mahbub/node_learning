const express = require("express");
const app = express();

const router = express.Router();

app.use("/admin", router);

const logger = (req, res, next) => {
  console.log(`Original url: ${req.originalUrl}`);
  next();
};

router.use(logger);

app.get("/about", (req, res) => {
  res.send("App about");
});
router.get("/about", (req, res) => {
  res.send("Router about");
});

app.listen(4000, () => {
  console.log("App is listening at 4000");
});
