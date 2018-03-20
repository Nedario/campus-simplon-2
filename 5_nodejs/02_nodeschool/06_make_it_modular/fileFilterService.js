/*jshint esversion : 6 */

// 0. three arguments: directory name, filename extension string, callback function
// 1. Export a single function that takes exactly the arguments described.
// 2. Call the callback exactly once with an error or some data as described.
// 3. Don't change anything else, like global variables or stdout.
// 4. Handle all the errors that may occur and pass them to the callback.

const fs = require("fs");

const fileFilerService = (path, ext, clbk) => {
  fs.readdir(path, (err, files) => {
    if (err) return clbk(err);

    clbk(null, files.filter(f => f.endsWith("." + ext)));
  });
};

module.exports = fileFilerService;
