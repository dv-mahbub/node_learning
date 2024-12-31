const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
app.locals.title = "Exress App";
app.use(router);

router.get("/about", (req, res) => {
  res.send("This is about section");
});

router.param("id", (req, res, next, userId) => {
  console.log("userid is: ", +userId);
  const user = {
    id: userId,
    name: "Mahbub",
  };
  req.user = user;
  next();
});

router.post("/user/:id", (req, res) => {
  // res.send("User id is: " + req.params.id);
  // console.log(req.user);
  res.send(req.user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
