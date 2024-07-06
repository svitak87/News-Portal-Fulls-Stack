const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const passport = require('passport');
const { User } = require('../db/db'); // Importa el modelo de usuario

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    try {
      let user = await User.findOne({ where: { googleId: profile.id } });
      if (!user) {
        // Si el usuario no existe, créalo
        const name = profile.name.givenName + profile.name.familyName
        user = await User.create({ 
          googleId: profile.id,
          name: name,
          email: profile.emails[0].value      
         });
      }
      return cb(null, user);
    } catch (err) {
      return cb(err, null);
    }
  }
));

// Serialización del usuario
passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

// Deserialización del usuario
passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});
