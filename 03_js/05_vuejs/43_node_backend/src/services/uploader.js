/* jshint esversion : 6 */
const multer = require('multer');

const storage = multer.diskStorage({
  destination: "./static/uploads/",
  filename: (req, file, clbk) => {
    clbk(null, Date.now() + "_" + file.originalname);
  }
});

const filter = (req, file, clbk) => {
  // console.log("in file filter + file);

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
