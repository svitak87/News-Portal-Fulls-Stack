require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/newsportal`,
  {
    logging: false,
    native: false,
  }
);

const User = require('../models/User')(sequelize);

module.exports = { sequelize, User }; 