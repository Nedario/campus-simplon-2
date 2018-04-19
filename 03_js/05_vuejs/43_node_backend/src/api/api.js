/* jshint esversion : 6 */
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const session = require('express-session');
// Let's go ...

// MYSQL session store !
const MySQLStore = require('express-mysql-session')(session);

const DBSessionOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@mysql",
    database: "node-backend"
};

const sessionStore = new MySQLStore(DBSessionOptions);
// console.log(sessionStore);

// express setup
const express = require("express");
const app = express();

// app.set('trust proxy', 1); // sécurité : faire confiance au premier proxy

// config simple du C.O.R.S
app.use(cors({
  origin: [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:8082",
    "http://localhost:8083",
  ], // domaines validés
  methods: ["GET", "DELETE", "PATCH", "POST", "PUT"], // verbes http validés
  credentials: true // autorise set cookie
}));

app.use(helmet()); // security middlewares collection
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "maxcdn.bootstrapcdn.com"]
  }
}));

app.use(bodyParser.json()); // JSON accepté @param requêtes http
app.use(bodyParser.urlencoded({ extended: true })); // form-urleconded accepté @param requêtes http

app.use(cookieParser()); // (the oracle says : 'do you wan't some cookies ?')

var sess = {
    name: 'u.sess.id',
    secret: '@someranÖM123ndsMachinChoses_2018',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    maxAge: 900000,
    httpOnly: true
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

// BASE API ENDPOINT
app.get("/", (req, res) => {
  res.status(200).send("node-backend says : Hello World !");
});

// myAPI modules
const users = require("./users")(app);

app.listen(port);
