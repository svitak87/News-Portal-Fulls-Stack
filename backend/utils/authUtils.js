const jwt = require("jsonwebtoken");
const { secretKey } = require("../JWT/jwtConfig");

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const generateRefreshToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "7h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, generateRefreshToken, verifyToken };
