const axios = require("axios");

const getDollarExchangeRates = async () => {
  try {
    const response = await axios.get("https://dolarapi.com/v1/dolares");
    const dollarValues = response.data;
    return dollarValues;
  } catch (error) {
    throw error;
  }
};

module.exports = getDollarExchangeRates;
