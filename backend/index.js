require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');
const server = express();
const generalRoutes = require('./routes/adminRotes')
const { sequelize } = require('./db/db')
require('./googleOauth/googleOauth')
const PORT = process.env.PORT || 3001;


server.use(morgan("dev"));
server.use(express.json())

const corsOptions = {
  origin: "http://localhost:5000", 
  credentials: true
};

server.use(cors(corsOptions));


server.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

server.use(passport.initialize());
server.use(passport.session());
server.use('/api', generalRoutes)

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Model synchronization successful.'); 
    server.listen(PORT, () => {
      console.log(`Server running on port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main()
