/*jshint esversion : 6 */
// API User
module.exports = (app) => {

  const userModel = require("./models/users");
  const uploader = require("./services/uploader");
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
      userModel.login(response => {
        response.token = Date.now();
        // res
        res.status(response.error ? 401 : 201).send(response);
      }, req.body); // le second param est ici !!!
    });

    app.post('/user', (req, res) => {
      userModel.register(response => {
        // var status = response.error ? 409 : 201;
        console.log(response);
        response.token = Date.now();
        res.status(response.error ? 409 : 201);
        res.send(response);
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
      console.log(!req.file);
      if (!req.file) { // pas de fichier reçu, retour au client
        return res.send({error: true, message: "No file received"});
      } else { // fichier ok
        uploaderAvatar(req, res, (err) => { // multer lance l'upload
          if (err) { // si une erreur survient pendant l'upload...
            return res.send({error: true, message: "Error during upload"});
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
