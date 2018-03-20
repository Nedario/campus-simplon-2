/* jshint esversion : 6 */
const fs = require("fs");
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: "./src/uploads/",
  filename: (req, file, cb) => {
    console.log("**************");
    console.log(file.originalname);
    cb(null, Date.now() + "_" + file.originalname);
  }
});

const filter = (req, file, clbk) => {
  console.log("in file filter");
  console.log(file);

  if (!file.mimetype.match("image/")) {
    clbk(null, false);
  } else {
    clbk(null, true);
  }
};

const uploader = multer({
  fileFilter: filter,
  limits: 2097152,
  storage: storage,
});

module.exports = uploader;
