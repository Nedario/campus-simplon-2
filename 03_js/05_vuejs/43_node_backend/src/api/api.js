/* jshint esversion : 6 */
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// const port = 3001;

// config des types de données acceptées en param ajax
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// config simple du C.O.R.S
app.use(cors());

const users = require("./users")(app);

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World');
});

app.listen(3000);
