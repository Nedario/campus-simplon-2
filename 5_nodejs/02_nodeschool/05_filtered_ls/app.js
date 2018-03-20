/* jshint esversion : 6 */
const fs = require("fs");
const path = "./files"; // dossier de test (avant verify)
const ext = "html"; // extension de test (avant verify)
// const path = process.argv[2];
// const ext = process.argv[3];

fs.readdir(path, (err, files) => { // lecture asynchrone du dossier en utilisant FileSystem
  // console.log(files); // files contient tous les fichiers/dossiers contenus dans le path
  if (err) throw err; // si une erreur survient, la lever (à catch en amont)
  const filtered = files.filter(f => f.endsWith("." + ext));// fat arrow return 1ère instruction
  // la prog fonctionnelle c'est beau !
  // console.log(filtered);
  filtered.forEach(f => console.log(f)); // parcours des fichiers retenus pour print console
});

/*
// MEME CODE EN VERSION ES5

fs.readdir(path, function(err, files) { // lecture asynchrone du dossier en utilisant FileSystem
  // console.log(files); // files contient tous les fichiers/dossiers contenus dans le path
  if (err) throw err; // si une erreur survient, la lever (à catch en amont)

  const filtered = files.filter(function(f) {
    return f.endsWith("." + ext);
  });// fat arrow return 1ère instruction
  // la prog fonctionnelle c'est beau !
  // console.log(filtered);
  filtered.forEach(function(f) {
    console.log(f);
  }); // parcours des fichiers retenus pour print console
});
*/
