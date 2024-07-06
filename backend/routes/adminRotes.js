const express = require("express");
const router = express.Router();

const getAppleNewsRoute = require("./getAppleNewsRoute");
const getTeslaNewsRoute = require("./getTeslaNewsRoute");
const getUsBussinessRoute = require("./getUsBussinessRoute");
const getAllTechCrunchNewsRoute = require("./getTechCrunchRoute");
const getWallStreetJournalNews = require('./getWallStreetNewsRoute');
const getWorldNews = require('./getWorldNewsRoute');
const dollarExchangerRates = require('./dollarExchangeRateRoute');
const argentinaNews = require('./argentinaRoute')
const addUser = require('./suscription/suscription')
const login = require('./login/login')
const authentication = require('./authenticated/authenticated')
const recivedEmail = require('./sugestions/sugestions')
const googleAuth = require('./googleAuthenticate/googleAuthenticate')

router.use(getAppleNewsRoute);
router.use(getTeslaNewsRoute);
router.use(getUsBussinessRoute);
router.use(getAllTechCrunchNewsRoute);
router.use(getWallStreetJournalNews);
router.use(getWorldNews);
router.use(dollarExchangerRates);
router.use(argentinaNews)
router.use(addUser)
router.use(login)
router.use(authentication)
router.use(recivedEmail)
router.use(googleAuth)

module.exports = router;
