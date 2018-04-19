/*jshint esversion : 6 */
const crypto = require("crypto");

var secretLength = 64;

const generateTokenSecret = (length) => {
  return new Promise((resolve, reject) => {
    const len = Math.ceil(secretLength / 2);
    crypto.randomBytes(len, (err, buffer) => {
      if (err) return reject(err);
      else resolve(buffer.toString('hex').slice(0, len));
    });
  });
};

const setSecretLength = (length) => {
  try {
    if (!isFinite(length) || length < 32) throw new Error(`Error when trying to set secret length. Default value still applies (${secretLength})`);
    secretLength = length;
    return secretLength;
  } catch(err) {
    return err;
  }
};

const getSecretLength = (length) => {
  return secretLength;
};

// middleware function to check for logged-in users
const checkSession = (req, res, next) => {
  console.log("in auth");
    // if (req.session.user && req.cookies.user_sid) {
    //     res.redirect('/walala');
    // } else {
        next();
    // }
};

const hasUserCredential = (req) => {
      let check = false;
      if (req.session.id && req.cookies &&req.cookies["u.sess.id"]) {
        const cookieSessionID = req.cookies["u.sess.id"].split(".")[0].substr(2);
        const signature = req.cookies["u.sess.id"].split(".")[1];
        console.log(cookieSessionID);
        console.log(signature);
        check = req.session.id === cookieSessionID;
      }
      return check;
};

module.exports = {
  checkSession,
  generateTokenSecret,
  hasUserCredential
};
