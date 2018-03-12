/* jshint esversion : 6 */

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@mysql',
  database : 'node-backend'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('Result from DB -> The solution is: ', results[0].solution);
});


const get = (clbk, id) => {
  var query;

  if (id) query = `SELECT * FROM users WHERE id = ${connection.escape(id)}`;
  else query = 'SELECT * FROM users';

  connection.query(query, (error, results, fields) => {
    if (error) throw error; // en cas d'erreur, une exception est levée
    clbk(results); // on passe les résultats de la requête en argument de la fonction callback
  });
};

const create = (clbk, id) => {


};

const remove = (clbk, id) => {


};

const patch = (clbk, id) => {


};

module.exports = {
  get: get,
  create: create,
  remove: remove,
  patch: patch,
};
