const express = require('express');
const passport = require('passport');

// requiring auth so that it is loaded with the server
require('./auth');

const path = require('path');
const bodyParser = require('body-parser');

// check if user is logged in
function isLoggedIn(req, res, next){
  // if user is logged in, continue next, if not, 401 error
  req.user ? next() : res.send(401);
}

// make express app
const app = express();

// IMPORT ROUTES
// signup route
const { Signup } = require('./routes/signup');


// path to root client files
const CLIENT = path.resolve(__dirname, '../../dist');

// parsing
app.use(bodyParser.json());

// serve static files from client
app.use(express.static(CLIENT));

// ROUTING

// router for signup
app.use('/signup', Signup);

// router for -


// ---------------AUTH-----------------

app.get('/', (req, res) => {

  // serve landing page that has <a href> link for /auth/google
  // res.send();
});

// '/auth/google' is endpoint for google sign in 
app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

// '/google/callback' is for redirecting to protected endpoint or rejecting
app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/itineraries',
    failureRedirect: '/',
  })
);

// protected route once logged in successfully
app.get('/itineraries', (req, res) => {

  // this will serve the itineraries page that shows all itineraries the user has
  res.send('Itineraries will show here!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
});

