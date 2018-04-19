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
connection.query('SELECT 42 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('DATABASE SAYS => The solution is', results[0].solution);
});

const get = (clbk, id) => {
  var query;

  if (id) query = `SELECT id, mail, avatar, about, is_admin FROM users WHERE id = ${connection.escape(id)}`;
  else query = 'SELECT id, mail, avatar, about, is_admin FROM users';

  connection.query(query, (error, results, fields) => {
    if (error) throw error; // en cas d'erreur, une exception est levée
    clbk(results); // on passe les résultats de la requête en argument de la fonction callback
  });
};

const checkMail = (clbk, mail) => {
  const query = `SELECT COUNT(*) as count FROM users WHERE mail = ${connection.escape(mail)}`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error; // en cas d'erreur, une exception est levée
    clbk(results); // passe les résultats de requête en arg du callback
  });
};

const register = (clbk, data) => {
  checkMail(res => {
    // console.log(res);
    if (res[0].count > 0) { // cette adresse mail est déjà en base
      return clbk({error: true, message: "mail already exists"});
    }
    // la base ne contient pas encore cette adresse mail, poursuivons l'insertion
    let query = `INSERT INTO users (mail, password) VALUES
    (${connection.escape(data.mail)}, ${connection.escape(data.password)})`;

    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      results.error = false;
      results.message = "tadaa : you're now registered !!!";
      clbk(results);
    });
  }, data.mail);
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

const login = (clbk, data) => {
  const q = `SELECT id, mail, avatar, about, is_admin FROM users WHERE mail = '${data.mail}' AND password = '${data.password}' GROUP BY id`;
  // console.log(q);
  connection.query(q, (error, results, fields) => {

    if (error) throw error;

    const tmp = results[0] || results;
    const res = {};

    if (Array.isArray(tmp) && !tmp.length) {
      res.message = "Mauvais mail ou mot de passe";
    } else {
      res.user = tmp;
      res.message = "Yay : You're now logged in !!";
    }
    clbk(res);
  });

};

const patchAbout = (clbk, about, id) => {
  const q = `UPDATE users SET about = ${connection.escape(about)} WHERE id = ${id}`;
  // console.log(q);
  connection.query(q, (error, results, fields) => {
    if (error) throw error;
    clbk(results);
  });
};

const patchAvatar = (clbk, avatar, id) => {
  const q = `UPDATE users SET avatar = ${connection.escape(avatar)} WHERE id = ${id}`;
  // console.log(q);
  connection.query(q, (error, results, fields) => {
    if (error) throw error;
    clbk(results);
  });
};

module.exports = {
  register,
  get,
  login,
  patch: {
    about: patchAbout,
    avatar: patchAvatar,
  },
  remove: remove,
};
