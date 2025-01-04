const express = require("express");
const multer = require("multer");
const path = require("path");

const UPLOADS_FOLDER = "./uploads/";
const app = express();

// //simple upload without condition
// var upload = multer({
//   dest: UPLOADS_FOLDER,
// });

//upload with conditions
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname.replace(fileExt).toLowerCase().split(" ").join("-") +
      Date.now() +
      fileExt;
    cb(null, fileName);
  },
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000, //5 mb
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "images") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only png, jpg and jpeg format allowed"));
      }
    } else if (file.fieldname === "files") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only pdf format allowed"));
      }
    } else {
      cb(new Error("Wrong field name"));
    }
  },
});

// //single upload
// app.post("/uploads", upload.single("image"), (req, res) => {
//   res.send("Successfully uploaded");
// });

// //multiple files
// app.post("/uploads", upload.array("images", 3), (req, res) => {
//   res.send("Successfully uploaded");
// });

//multiple fields
app.post(
  "/uploads",
  upload.fields([
    {
      name: "images",
      maxCount: 2,
    },
    {
      name: "files",
      maxCount: 2,
    },
  ]),
  (req, res) => {
    res.send("Uploaded successfully");
  }
);

//static content
const staticPath = path.join(__dirname, "../../uploads");
app.use(
  express.static(staticPath, {
    index: "home.html",
  })
);
//static content
const staticPath2 = path.join(__dirname, "../../public");
app.use(
  express.static(staticPath2, {
    index: "home.html",
  })
);

app.use((error, req, res, next) => {
  if (error) {
    if (error instanceof multer.MulterError) {
      res.status(500).send({ error: `Multer error: ${error.message}` });
    } else {
      res.status(500).send({ error: error.message });
    }
  } else {
    res.send("Success");
  }
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
