const express = require('express')

const Signup = express.Router()

Signup.get('/', (req, res) => {
  // serve the homepage/ sign in
  res.send('sign-in here')
})

module.exports.Signup = Signup;
