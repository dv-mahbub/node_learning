const express = require("express");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

const admin = express();
admin.use(express.json());

app.use("/admin", admin);
admin.use(cookieParser());
app.get("/", (req, res) => {
  res.send("he");
});

const router = express.Router();
admin.use(router);

router.post("/user/:id", (req, res) => {
  console.log(".........................................");
  console.log("baseUrl: " + req.baseUrl);
  console.log("hostname:" + req.hostname);
  console.log("params: " + JSON.stringify(req.params));
  console.log("query: " + JSON.stringify(req.query));
  console.log("path: " + req.path);
  console.log("ip: " + req.ip);
  console.log("method: " + req.method);
  console.log("protocol: " + req.protocol);
  console.log("isSecure: " + req.secure);
  console.log(`body: ${JSON.stringify(JSON.parse(JSON.stringify(req.body)))}`); //testing json parse
  console.log("cookie: " + JSON.stringify(req.cookies));
  console.log("route: " + JSON.stringify(req.route));
  console.log(req.accepts("json"));
  console.log("..........................................");
  res.send(
    "successful, params: " + req.params.id + " query: " + req.query.filter
  );
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
