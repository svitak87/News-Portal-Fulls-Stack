const express = require("express");
const route = express.Router();
const getWorldNews = require("../controllers/getWorldNews");

route.get("/world_news", async (req, res) => {
    try {
        const allWorldNews = await getWorldNews();
        res.status(200).json(allWorldNews)
    } catch (error) {
        res.status(500).json({error: 'There are no news'})
    }
});

module.exports = route;