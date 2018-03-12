/* jshint esversion : 6 */
const fs = require("fs");
// const file = "./test.txt";
const file = process.argv[2];
// console.log(fs);
try {
  const buffer = fs.readFileSync(file);
  const bufferToFile = buffer.toString();
  const fileLines = bufferToFile.split("\n");
  console.log(fileLines.length - 1);
  // console.log("buffer =>" + buffer);
  // console.log("-------------");
  // console.log("bufferToFile =>" + bufferToFile);
  // console.log("-------------");
  // console.log("fileLines =>" + fileLines);
  // console.log(fileLines);
  // console.log("-------------");
} catch(err) {
  console.error(err);
}
