const express = require('express');
const route = express.Router();
const getAllUsBussiness = require('../controllers/getAllUsBussiness')

route.get('/us_bussiness', async (req, res) => {
    try {
        const allUsBussinessNews = await getAllUsBussiness();
        res.status(200).json(allUsBussinessNews)
    } catch (error) {
        res.status(500).json({error: 'There are no news'})
    }
})

module.exports = route;