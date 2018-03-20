/* jshint esversion : 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userModel = require("./models/users.js");
const port = 3000;
// plus tard pour l'upload d'avatar...
const uploader = require("./services/uploader");
const uploaderAvatar = uploader.single('avatar');

// config des types de données acceptées en param ajax
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// config simple du C.O.R.S
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
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
    console.log('data after get all users');
    console.log(data);
    res.send(data);
  });
});

app.get('/user/:id', (req, res) => {
  console.log("get-user:id@api => " + req.params.id);
  userModel.get((data) => {
    console.log('data after get user by id');
    console.log(data);
    res.send(data);
  }, req.params.id); // le second param est ici !!!
});

app.post('/user', (req, res) => {
  console.log('post-user@api');
  console.log(req.body);

  userModel.create((data) => {
    console.log('data after create user');
    console.log(data);
    res.send(data);
  }, req.body); // le second param est ici !!!
});

app.delete('/user/:id', (req, res) => {
  console.log('delete-user:id@api => ' + req.params.id);

  userModel.remove((data) => {
    console.log('data after delete user');
    console.log(data);
    res.send(data);
  }, req.params.id); // le second param est ici !!!

});

app.post('/avatar', uploader.single('avatar'), (req, res) => {
  console.log(req);
  if (!req.file) { // pas de fichier reçu, retour au client
    console.log("No file received");
    return res.send({message: "No file received"});
  } else { // fichier ok
    console.log('file received');
    uploaderAvatar(req, res, (err) => { // multer lance l'upload
      if (err) { // si une erreur survient pendant l'upload...
        return res.send({message: "Error during upload"});
      } // si tout s'est bien passé ...
      res.send({message: "file received"});
    });
  }
});

app.listen(port);
