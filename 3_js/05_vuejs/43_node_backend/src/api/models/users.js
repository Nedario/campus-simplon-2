/* jshint esversion : 6 */

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@mysql',
  database : 'node-backend'
});

connection.connect();

// dummy function pour vérifier si la connectione à la base est bien établie
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('Result from DB -> The solution is: ', results[0].solution);
});

const get = (clbk, id) => {
  var query;

  if (id) query = `SELECT id, mail, avatar FROM users WHERE id = ${connection.escape(id)}`;
  else query = 'SELECT id, mail, avatar FROM users';

  connection.query(query, (error, results, fields) => {
    if (error) throw error; // en cas d'erreur, une exception est levée
    clbk(results); // on passe les résultats de la requête en argument de la fonction callback
  });
};

const checkMail = (clbk, mail) => {
  const query = `SELECT COUNT(*) as count FROM users WHERE mail = ${connection.escape(mail)}`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error; // en cas d'erreur, une exception est levée
    clbk(results); // on passe les résultats de la requête en argument de la fonction callback
  });

};

const create = (clbk, data) => {

  // checkMail(res => {
    // console.log(res);
    // console.log(res[0].count);

    // if (res[0].count > 0) {
      // cette adresse mail est déjà en base
      // clbk({error: true, message: "mail allready exists"});
    // }
    // else {
      // la base ne contient pas encore cette adresse mail, poursuivons l'insertion
      let query = `INSERT INTO users (mail, password) VALUES
      (${connection.escape(data.mail)}, ${connection.escape(data.password)})`;

      connection.query(query, (error, results, fields) => {
        if (error) throw error; // en cas d'erreur, une exception est levée
        results.error = false;
        results.message = "tadaa : you're now registered !";
        clbk(results); // on passe les résultats de la requête en argument de la fonction callback
      });
    // }
  // }, data.mail);

};

const remove = (clbk, id) => {
  const query = `DELETE FROM users WHERE id = ${connection.escape(id)}`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error; // en cas d'erreur, une exception est levée
    results.error = false;
    results.message = "user has been removed from database";
    clbk(results); // on passe les résultats de la requête en argument de la fonction callback
  });
};

const patch = (clbk, id) => {


};

module.exports = {
  get: get,
  create: create,
  remove: remove,
  patch: patch,
};
