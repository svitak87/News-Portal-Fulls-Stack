const express = require("express");
const route = express.Router();
const getTeslaNews = require('../controllers/getTeslaNews')

route.get("/tesla_news", async (req, res) => {
  try {
    const allTeslaNews = await getTeslaNews();
    res.status(200).json(allTeslaNews);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
});

module.exports = route;
