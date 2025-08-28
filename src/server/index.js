const express = require('express');
const passport = require('passport');

// requiring auth so that it is loaded with the server
require('./auth');

const path = require('path');
const bodyParser = require('body-parser');

// make express app
const app = express();

// IMPORT ROUTES
// signup route
const { Signup } = require('./routes/signup');
const { NoEmitOnErrorsPlugin } = require('webpack');


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
  passport.authenticate('google', { scope: ['email'] })
);

// '/google/callback' is for redirecting to protected endpoint or rejecting
// app.get('/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/auth/failure',
//     successRedirect: '/itineraries',
//   })
// );

// attempt to make ^^^ into a promise
app.get('/auth/google/callback', (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('google', {
      failureRedirect: '/auth/failure',
      successRedirect: '/itineraries',
    }, (err, user) => {
      // console.log(err, ' - error');
      // console.log(user, ' - user');
      if (err) {
        reject(new Error('failed to redirect AUTH:', err))
      } else if (!user) {
        reject(new Error('user is not authenticated:', err))
      }
      resolve(() => {
        res.redirect('/itineraries');
      })
    })(req, res)
  })
});

// app.get('/auth/google/callback', async (req, res) => {

//   const result = await passport.authenticate('google', {
//     failureRedirect: '/auth/failure',
//     successRedirect: '/itineraries',
//   })

//   try {
//     result()
//   }
//   catch(err) {
//     console.error('Failed to authenticate:', err);
//   }
// })

// app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/auth/failure'}),
//   async (req, res) => {
//     try {
//       res.redirect('/itineraries')
//     }
//     catch(err) {
//       console.error('Failed to authenticate:', err);
//     }
//   }
// )

// app.get('/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/auth/failure'
//   }),
//   (req, res) => {
//     res.redirect('/itineraries')
//   }
// );

// endpoint for authenticate failure redirect
app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong...')
});

// check if user is logged in
function isLoggedIn(req, res, next){
  // if user is logged in, continue next, if not, 401 error
  req.user ? next() : res.send(401);
}

// protected route once logged in successfully
app.get('/itineraries', isLoggedIn, (req, res) => {

  // this will serve the itineraries page that shows all itineraries the user has
  res.send('Itineraries will show here!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
});

