const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

module.exports = adminRouter;
