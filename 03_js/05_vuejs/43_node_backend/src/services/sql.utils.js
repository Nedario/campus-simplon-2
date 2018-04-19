/* jshint esversion : 6 */
module.exports = {
  escapeSingleQuote: (str) => {
  	return str.replace(/'/g, "''");
  },
  getSQLCredentials: () => {
    return {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "@mysql",
      database: "node-backend"
    };
  }
};
