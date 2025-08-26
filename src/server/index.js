const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const { Parser } = require('webpack')

// make express app
const app = express()

// IMPORT ROUTES
// signup route
const { Signup } = require('./signup')


// path to root client files
const CLIENT = path.resolve(__dirname, '../../dist')

// MIDDLEWARE
app.use(bodyParser.json())

// serve static files from client
app.use(express.static(CLIENT))



// ROUTING
// router for signup
// app.use('/signup', Signup)



const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})

