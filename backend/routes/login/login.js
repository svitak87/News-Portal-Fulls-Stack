const express = require("express");
const route = express.Router();
const loginUser = require("../../controllers/loginUser");
const { generateToken } = require("../../utils/authUtils");


route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    if (user) {
      const token = generateToken(user);
      res.status(200).json({ user: user, token: token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    if (error.message === "Email doesn't exist") {
      res.status(401).json({ error: error.message });
    }else if(error.message === "Invalid credentials"){
      res.status(403).json({error: error.message})
    }else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
});

module.exports = route;


