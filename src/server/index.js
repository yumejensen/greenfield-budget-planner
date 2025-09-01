const express = require('express');
const session = require('express-session')
const passport = require('passport');

const path = require('path');
const bodyParser = require('body-parser');

// ----------EXPRESS APP--------------
const app = express();

// add session middleware
app.use(session({
  resave: false,
  secret: 'secretcalifragilistic',
  saveUninitialized: false
}));

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

// requiring auth so that it is loaded with the server
require('./auth');



// ------------MIDDLEWARE---------------


// path to root client files
const CLIENT = path.resolve(__dirname, '../../dist');
const HTML = path.resolve(__dirname, '../../dist/index.html');

// parsing
app.use(bodyParser.json());

// serve static files from client
app.use(express.static(CLIENT));


// ----------IMPORT ROUTES--------------
// signup route
const { Signup } = require('./routes/signup');
const { Currency } = require('./api/currency-conversion.js')
const { Events } = require('./api/events.js')
const { Map } = require('./api/map.js')
const { Trips } = require('./api/trips.js')


// -------------ROUTING-----------------

// router for signup
app.use('/signup', Signup);
app.use('/api/currency', Currency);
app.use('/api/events', Events);
app.use('/api/map', Map);
app.use('api/trips', Trips)



// --------------AUTH-----------------

app.get('/', (req, res) => {

  // serve landing page that has <a href> link for /auth/google
  // res.send();
});

// '/auth/google' is endpoint for google sign in
app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

// 'auth/google/callback' endpoint is for redirecting after sign in attempt
app.get('/auth/google/callback',
  passport.authenticate('google', {
    // failed sign-in takes user back to homepage
    failureRedirect: '/'
  }),
  (req, res) => {
    // successful sign-in takes user into protected
    res.redirect('http://localhost:3000/dashboard')
  }
);


// function to check if user is logged in
function isLoggedIn(req, res, next){
  // if user is logged in, continue next, if not, 401 error
  req.user ? next() : res.send(401);
}

// protected route once logged in successfully
app.get('/itineraries', isLoggedIn, (req, res) => {
  // REPLACE w/ itineraries page
  res.send('Itineraries will show here!');
});


// ----------CATCH ALL ---------------

// also works with app.all
// the '/{*any}' appears to be a path pattern from express
app.get('/{*any}', function(req, res) {
  // send the index.html inside dist folder
  res.sendFile(HTML, function(err) {
    // handle errors, send 500
    if (err) {
      res.status(500).send(err)
    }
  })
})

// ----------SERVER LISTEN---------------

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
});

