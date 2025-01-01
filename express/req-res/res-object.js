const express = require("express");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

//headersSent //view engine
app.get("/about", (req, res) => {
  console.log("isHeaderSent: " + res.headersSent);
  res.render("pages/about", {
    name: "Dhaka",
  });
  console.log("isHeaderSent: " + res.headersSent);
});

//res.end()
app.get("/blank", (req, res) => {
  res.end();
  console.log("isHeaderSent: " + res.headersSent);
});

//res.json()
app.get("/json", (req, res) => {
  res.json({ name: "Dhaka" });
});

//res.status()
app.get("/send-status", (req, res) => {
  res.sendStatus(400);
  //   res.status(400).send("Bad Request");
});

app.get("/status", (req, res) => {
  res.status(400);
  //   res.send("Bad Request status but successful response");
  res.json({
    statusCode: 400,
    Status: "Bad Request status but successful response",
    data: [
      {
        name: "Dhaka",
        country: "Bangladesh",
      },
      {
        name: "New York",
        country: "USA",
      },
    ],
  });
});

//format
app.get("/format", (req, res) => {
  res.format({
    "text/plain": () => {
      res.send("this is plain text");
    },
    "text/html": () => {
      res.send("<h1>Html format example</h1>");
    },
    "application/json": () => {
      res.send({ message: "this is json example" });
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    },
  });
});

//cookies
app.get("/cookie", (req, res) => {
  res.cookie("name", "simple app").send("cookie set");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
