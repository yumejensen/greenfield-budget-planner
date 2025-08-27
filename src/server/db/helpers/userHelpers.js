const mongoose = require('mongoose');

// IMPORT MODELS FROM DB INDEX.JS
const { User } = require('../Schemas/user');

// -----------------HELPERS--------------------

// find user by name
const findUser = (user) => {

  return User
    .find({username: user})
    .sort()
    .limit(1);
};

module.exports.findUser = findUser;
