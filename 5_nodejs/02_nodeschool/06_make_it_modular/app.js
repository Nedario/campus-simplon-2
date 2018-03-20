/*jshint esversion : 6 */

const fileFilter = require("./fileFilterService");
const path = process.argv[2];
const ext = process.argv[3];

fileFilter(path, ext, (err, files) => {
  try {
    if (err) throw err;
    files.forEach(f => console.log(f));
  } catch(err) {
    console.error(err);
  }
});
