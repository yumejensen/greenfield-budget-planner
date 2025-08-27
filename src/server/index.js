const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')

// make express app
const app = express()

// IMPORT ROUTES
// signup route
const { Signup } = require('./routes/signup')


// path to root client files
const CLIENT = path.resolve(__dirname, '../../dist')

// MIDDLEWARE
app.use(bodyParser.json())

// serve static files from client
app.use(express.static(CLIENT))

// ROUTING
// router for signup
app.use('/signup', Signup)

// ---------------AUTH-----------------
app.get('/', (req, res) => {

  // serve landing page that has <a href> link for /auth/google

});

// protected route once logged in successfully
app.get('/itineraries', (req, res) => {

  // this will serve the itineraries page that shows all itineraries the user has
  res.send('Itineraries will show here!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})

