const express = require("express");
const route = express.Router();
const getAppleNews = require("../controllers/getAppleNews");

route.get("/apple_news", async (req, res) => {
    try {
        const allAppleNews = await getAppleNews();
        res.status(200).json(allAppleNews)
    } catch (error) {
        res.status(500).json({error: 'There are no news'})
    }
});

module.exports = route;
