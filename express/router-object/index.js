const express = require("express");
const publicRouter = require("./public-router");
const adminRouter = require("./admin-router");

const app = express();
app.use("/", publicRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("Listenning to port 3000");
});
