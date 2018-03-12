/* jshint esversion : 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userModel = require("./models/users.js");
// console.log(userModel);

// config des type de données acceptée en param ajax
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// config simple du C.O.R.S
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API User Basic

app.get('/', (req, res) => {
  console.log("@api/basic");
  res.send('Hello World');
});

app.get('/user', (req, res) => {
  console.log("get-user@api");
  userModel.get((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get('/user/:id', (req, res) => {
  console.log("get-user@api");
  console.log(req.body.id);
  console.log("------------");
  userModel.get((data) => {
    console.log(data);
    res.send(data);
  }, id);
});

app.post('/user', (req, res) => {
  res.send('post-user@api');
  console.log(req.body);
  userModel.create((data) => {
    console.log(data);
    res.send(data);
  });
});

app.delete('/user/:id', (req, res) => {
  res.send('delete-user@api');
  console.log(res.body);
});

app.listen(3000);
