const express = require("express");
const app = express();
app.use(express.json());

const blog = express();
const blogAdmin = express();

app.use("/blog", blog);
blog.use("/admin", blogAdmin);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/app-path", (req, res) => {
  res.send(app.path());
});

app.get("/blog-path", (req, res) => {
  res.send(blog.path());
});

app.get("/blog-admin-path", (req, res) => {
  res.send(blogAdmin.path());
});

app.listen(2, () => {
  console.log("Server is running on port 2");
});
