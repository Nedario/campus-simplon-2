/* jshint esversion : 6 */
module.exports = {
  escapeSingleQuote: (str) => {
  	return str.replace(/'/g, "''");
  }
};
