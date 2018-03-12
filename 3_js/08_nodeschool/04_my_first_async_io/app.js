/* jshint esversion :  6 */

// on charge la lib fileSystem (comprise dans le coeur de node)
const fs = require("fs");
// le fichier à tester est fourni en argument par learnyounode
const file = process.argv[2];

// pour traiter des pdf, besoin d'une librairie ...
// si ça vous tente, à vous de jouer (npm init, puis installer la lib)
// https://github.com/brianc/node-pdf-text ...

const traitementData = (d) => {
  // compter les lignes du fichier c'est facile avec split !!!
  console.log(d.split("\n").length - 1); // -1 pour la dernière ligne vide
};

const monCallback = function (err, data) {
  if (err) throw Error(err); // si une erreur se produit... on le signale
  else traitementData(data); // sinon j'envoie le fichier à une fonction de traitement
};

// on utilise fs pour lire le fichier de manière asynchrone
// du coup, on récupère la donnée avec une fonction monCallback
// ATTENTION : RETURN NE MARCHERA PAS ICI
fs.readFile(file, "utf8", monCallback); // noter la conversion directe du buffer en string
