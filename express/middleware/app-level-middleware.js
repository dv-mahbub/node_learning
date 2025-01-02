const express = require("express");

const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`Time: ${new Date(Date.now()).toLocaleString()}`);
  //   res.end();
  //   res.send("Home section");
  next();
};

const contactDetails = null;

const loggerMiddleware2 = (req, res, n) => {
  console.log("2ns middleware");
  if (req.path === "/contact" && !contactDetails) {
    res.send("No contact Details");
    return;
  }
  n();
};

app.use(loggerMiddleware);
app.use(loggerMiddleware2);

app.get("/about", (req, res) => {
  res.send("This is about section");
});

app.get("/contact", (req, res) => {
  res.send("Contact details");
});

app.listen(4000, () => {
  console.log("App is listening at 4000");
});
