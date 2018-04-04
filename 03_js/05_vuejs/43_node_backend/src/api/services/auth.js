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

module.exports = {
  generateTokenSecret
};
