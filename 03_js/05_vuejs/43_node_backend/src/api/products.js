/*jshint esversion : 6 */

// ./src/api/users.js

module.exports = (app) => {

  const productModel = require("./../models/products");

  const users = () => {

    app.get('/product/category', (req, res) => {
      productModel.getCategories((response) => {
        console.log("response");
        console.log(response);
        res.status(200).send(response);
      });
    });

  };

  return users();
};
