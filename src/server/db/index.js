const mongoose = require('mongoose');

const DATABASE = 'travel-planner';

// SCHEMA IMPORTS
const { userSchema, budgetSchema } = require('./Schemas')

mongoose.connect(`mongodb://localhost:27017/${DATABASE}`)
  .then(()=> {
    console.log(`${DATABASE} DB Connected`);
  })
  .catch((err)=> {
    console.error(`${DATABASE} DB failed to connect:`, err);
  });


// MODEL CREATION
const User = mongoose.model('User', userSchema);
const Budget = mongoose.model('Budget', budgetSchema);


// TEST CREATE TO ADD USER
const addUser = () => {

  User.create({username: 'arglebargle'})
};

addUser();

module.exports = {
  User,
  Budget
};
