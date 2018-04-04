/*jshint esversion : 6 */
// API User
module.exports = (app) => {

  const userModel = require("./models/users");
  const auth = require("./services/auth");
  const uploader = require("./services/uploader");
  const jwt = require("jsonwebtoken");
  const uploaderAvatar = uploader.single('avatar');

  const users = (app) => {

    app.get('/user', (req, res) => {
      userModel.get((response) => {
        res.send(response);
      });
    });

    app.get('/user/:id', (req, res) => {
      userModel.get((response) => {
        res.send(response);
      }, req.params.id); // le second param est ici !!!
    });

    app.post("/login", (req, res) => {
      // return res.send("in api.users/login");
      if (!req.body) return res.status(500).send({message: "access non autorisé au serveur"});

      userModel.login(response => {
        if (!response.error) {
          const secret = auth.generateTokenSecret().then(secret => {
            // console.log(secret);
            // console.log("response");
            // console.log(response);
            response.token = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60), // le token expirera dans une heure
              iss: "simplon-node-backend",
              data: {
                user: response.user,
                message: response.message,

              }
              // user: "???",
              // role: "???"
            }, secret);

            return res.status(201).send(response);

          }).catch(err => {
            console.log(err);
            res.status(500).send(response);
          });
        } else {
          response.token = null;
          res.status(401).send(response);
        }

      }, req.body); // le second param de userModel.login() est ici !!!
    });

    app.post('/user', (req, res) => {
      userModel.register(response => {
        console.log(response);
        response.token = Date.now();
      }, req.body);
    });

    app.delete('/user/:id', (req, res) => {
      userModel.remove((data) => {
        res.send(data);
      }, req.params.id);
    });

    // app.post('/user/token', (req, res) => {
    //   res.send("api.users/token");
    // });

    app.patch('/avatar', uploaderAvatar, (req, res) => {
      // console.log(!req.file);
      if (!req.file) { // pas de fichier reçu, retour au client
        //return res.send({error: true, message: "No file received"}); // @ag: before small patch try
        return res.status(400).send({error: true, message: "No file received"});
      } else { // fichier ok
        uploaderAvatar(req, res, (err) => { // multer lance l'upload
          if (err) { // si une erreur survient pendant l'upload...
            return res.status(500).send({error: true, message: "Error during upload"});
          } // si tout s'est bien passé ...
          res.send({error: false, message: "file received"});
        });
      }
    });

    app.patch('/about', (req, res) => {
      userModel.patch.about((data) => {
        res.send({error: false, message: "yoyo"});
      }, "about", req.body.about);
    });
  };

  return users(app);
};
