const express = require("express");
const route = express.Router();
const getDollarExchangeRates = require('../controllers/getDollarExchangeRates')

route.get("/dollar_exchange_rates", async (req, res) => {
  try {
    const dollarRates = await getDollarExchangeRates();
    res.status(200).json(dollarRates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = route;
