const express = require('express')
const { findUser } = require('./db helpers/userHelpers.js')

const Signup = express.Router()

Signup.get('/', (req, res) => {
  // serve the homepage/ sign in
  // res.send('sign-in here')

  const { user } = req.body;

  return findUser(user);

})

module.exports.Signup = Signup;
