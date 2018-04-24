/* jshint esversion : 6 */

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@mysql',
  database : 'node-backend'
});

connection.connect();

const getCategories = (clbk) => {
  const q = "SELECT * FROM product_category ORDER BY id";

  connection.query(q, (error, results, fields) => {
    if (err) throw err;
    clbk(results);
  });
};

module.exports = {
  getCategories
};
