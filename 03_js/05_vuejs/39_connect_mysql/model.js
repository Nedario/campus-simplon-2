/*jshint esversion: 6 */

// chargement des dépendances
const mysql = require('mysql');
// configuration de la connection à la base de données
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '@mysql',
  database : 'villes_fr'
});
// connection à la base de données
connection.connect();

const getVillesFR = (clbk) => {
  // requête de la base de données mySQL
  connection.query('SELECT * FROM departement', function (error, results, fields) {
    if (error) throw error; // en cas d'erreur, une exception est levée
    clbk(results); // on passe les résultats de la requête en argument de la fonction callback
  });
};

// on exporte cette fonction pour la donner en dépendance à server.js
module.exports = {
  getVillesFR: getVillesFR,
};
