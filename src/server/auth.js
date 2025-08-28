const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const { User } = require('./db/index.js');

require('dotenv').config();

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // use findOneAndUpdate to initialize or create a user
    // takes in: what you're looking for (profile id), what needs to be updated, options: different filters
    User.findOneAndUpdate({ 
      email: profile.email,
      googleId: profile.id
    }, { 
      email: profile.email,
      googleId: profile.id
    }, { 
      new: true, upsert: true 
    })
    .then((profile) => {
      // console.log('hello - this is the then block in findOneAndUpdate');
      // console.log('profile is', profile)
      done();
    })
    .catch((err) => {
      console.log('failed to find and update user PASSPORT:', err)
      done(err, null)
    })
  }
));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      // id: user.id,
      // username: user.username,
      // picture: user.picture
      email: user.email,
      googleId: user.googleId,
      id: user._id
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});
