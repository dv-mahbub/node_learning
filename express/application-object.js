const express = require("express");
const aboutApi = require("./about-api");

//first app name app
const app = express();
app.use(express.json());
const router = express.Router();
app.locals.title = "Exress App";
app.use(router);

router.get("/about", aboutApi);

//second app named admin
const admin = express();
admin.use(express.json());
const routerAdmin = express.Router();
admin.use(routerAdmin);

admin.use("/app", app);

routerAdmin.get("/about", (req, res) => {
  res.send(
    "mountpath is: " + admin.mountpath + ", " + "This is admin about page"
  );
});

//universal method
routerAdmin.all("/all", (req, res) => {
  res.send("This is universal method");
});

admin.listen(3000, () => {
  console.log("Server is running on port 3000");
});
