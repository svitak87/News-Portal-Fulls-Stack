// const crypto = require('crypto');

// const secretKey = crypto.randomBytes(32).toString('hex')

// module.exports = {secretKey: secretKey}

// Carga las variables de entorno
// jwtConfig.js
require('dotenv').config();


module.exports = {
  secretKey: process.env.SECRET_KEY
};
