const express = require("express");
const route = express.Router();
const getAllWalStreetNews = require('../controllers/getAllWalStreetNews')

route.get("/wall_street_journal_news", async (req, res) => {
  try {
    const allWallStreetNews = await getAllWalStreetNews();
    res.status(200).json(allWallStreetNews);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
});

module.exports = route;
