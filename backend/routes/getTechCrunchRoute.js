const express = require("express");
const route = express.Router();
const getAllTechCrunchNews = require("../controllers/getAllTechCrunchNews");

route.get("/tech_crunch_news", async (req, res) => {
  try {
    const allNewsTechCrunch = await getAllTechCrunchNews();
    res.status(200).json(allNewsTechCrunch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = route;
