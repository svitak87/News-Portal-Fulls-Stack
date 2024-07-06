const express = require("express");
const route = express.Router();
const getUserById = require('../../controllers/authenticated');
const authenticateToken = require('../../utils/authMiddleware');

route.get('/user', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = route;
