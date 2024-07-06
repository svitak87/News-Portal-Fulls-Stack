const express = require("express");
const passport = require("passport");
const route = express.Router();
const { generateToken } = require("../../utils/authUtils");


route.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

route.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    // Successful authentication, redirect home.
    try {
      // El usuario se encuentra en req.user después de la autenticación exitosa
      const user = req.user;

      if(user){
        const token = await generateToken(user);
        res.redirect(`http://localhost:4000?token=${token}`);
        // res.status(200).json({token: token})
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
);
module.exports = route;
