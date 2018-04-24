/*jshint esversion : 6 */

// ./src/api/users.js

module.exports = (app) => {

  const userModel = require("./../models/users");
  const auth = require("./../services/auth");
  const uploader = require("./../services/uploader");
  const jwt = require("jsonwebtoken");
  const uploaderAvatar = uploader.single('avatar');

  const users = () => {

    app.get('/user', (req, res) => {
      userModel.get((response) => {
        res.status(200).send(response);
      });
    });

    app.get('/user/credential', (req, res) => {
      res.send(auth.hasUserCredential(req));
    });

    app.get('/user/:id', (req, res) => {
      userModel.get((response) => {
        res.send(response);
      }, req.params.id); // le second param est ici !!!
    });

    app.post("/login", (req, res) => {

      if (!req.body) {
        return res.status(500).send({message: "access non autorisé au serveur"});
      }

      console.log("req.session");
      console.log(req.session);

      userModel.login(response => {
        // console.log(response);

        if (!response.error) {

          const secret = auth.generateTokenSecret().then(secret => {
            // response.token = jwt.sign({
            //   exp: Math.floor(Date.now() / 1000) + (60 * 60), // le token expirera dans une heure
            //   iss: "simplon-node-backend",
            //   data: {
            //     user: response.user,
            //     message: response.message,
            //   }
            // }, secret);
            req.session.user = response.user;

            return res.status(201).send(response);

          }).catch(err => res.status(500).send(err));

        } else {

          res.status(401).send(response);
        }

      }, req.body); // le second param de userModel.login() est ici !!!
    });

    app.post("/logout", (req, res) => {
      console.log("logout req.session");
      console.log(req.session);
      req.session.destroy(function(err) {
        req.session = null;
        if (err) throw err;
        else res.status(200).send("from server logout");
      });
    });

    app.post('/user', (req, res) => {

      try {
        userModel.register(response => {
          res.status(201).send("user créé avec succès");
        }, req.body);
      } catch(err) {
        res.status(500).send("soucis durant la création user");
      }
    });

    app.delete('/user/:id', (req, res) => {
      userModel.remove((reponse) => {
        res.send(reponse);
      }, req.params.id);
    });

    app.patch('/avatar', uploaderAvatar, (req, res) => {
      if (!req.file) { // pas de fichier reçu, retour au client
        return res.status(400).send({message: "No file received"});
      } else { // fichier ok
        uploaderAvatar(req, res, (err) => { // multer lance l'upload
          if (err) { // si une erreur survient pendant l'upload...
            return res.status(500).send({message: "Error during upload"});
          }
          // sinon si tout s'est bien passé ...
          userModel.patch.avatar((response) => {
            // mise à jour du model
            res.status(200).send({message: "File received", newAvatar: req.file.filename});

          }, req.file.filename, req.session.user.id);
          // req.file.filename représente le nom de fichier uploadé + modifié par multer (voir services/uploader.js)
        });
      }
    });

    app.patch('/about', (req, res) => {

      console.log(req.session.user.id);
      // return;
      userModel.patch.about((data) => {
        res.send({error: false, message: "yoyo"});
      }, req.body.about, req.session.user.id);
    });
  };

  return users();
};
