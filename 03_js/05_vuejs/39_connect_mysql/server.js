/*jshint esversion: 6 */

/*
  note : pour relancer dynamiquement le serveur à chaque changement du code :
  utiliser les libs nodemon OU pm2 (plus complexe à prendre en main mais plus évoluée)
  Ces programmes permettent, notamment, d'observer les changements des scripts node
  et de relancer le serveur automatiquement à chaque sauvegarde
*/

// chargement des dépendances
const express = require('express');
const app = express();
const model = require("./model.js");
// console.log(model);

console.log("--## hello world (of node) ! ##--");

// permettre les appels ajax provenant d'un nom de domaine différent (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// localhost:8001
app.get('/', function(req, res) {
  res.send('hello from express');
});

// localhost:8001/test
app.get('/test', function(req, res) {
  res.send(JSON.stringify({message: 'hello test'}));
});

// localhost:8001/get-villes-france
app.get('/villes-france', function(req, res) {
  model.getVillesFR(function callback(data) {
    res.send(JSON.stringify(data));
  });
});

// on lance le serveur node et on écoute sur le port 8001
// rdv donc à l'url localhost:8001
app.listen(8001);
