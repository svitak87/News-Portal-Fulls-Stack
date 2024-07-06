const express = require("express");
const route = express.Router();
const addUser = require("../../controllers/addUser");
const { suscribeEmail } = require("../../nodemailer/nodemailerConfig");

route.post("/suscription", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await addUser({ name, email, password });
    if (newUser) {
      const emailSent = await suscribeEmail(name, email);
      res
        .status(201)
        .json({ message: "user added successfully", newUser, emailSent });
    }
  } catch (error) {
    if (error.message === "user already exists") {
      res.status(403).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = route;
