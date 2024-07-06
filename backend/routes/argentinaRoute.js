const express = require("express");
const route = express.Router();
const getArgentinaNews = require("../controllers/argentina");

route.get("/argentina_news", async (req, res) => {
    try {
        const allArgentinaNews = await getArgentinaNews();
        res.status(200).json(allArgentinaNews)
    } catch (error) {
        res.status(500).json({error: 'There are no news'})
    }
});

module.exports = route;