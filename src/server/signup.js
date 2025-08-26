import express from 'express'

const Signup = express.Router()

Signup.get('/signup', (req, res) => {
  // serve the homepage/ sign in
  res.send('sign-in here')
})

export default Signup;
