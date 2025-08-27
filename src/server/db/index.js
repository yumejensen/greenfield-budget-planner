const mongoose = require('mongoose');

const { userSchema } = require('./Schemas');

mongoose.connect('mongodb://localhost:3000', {

}).then(()=> {
  console.log('DB Connected');
}).catch((err)=> {
  console.error('DB NOT Connected', err);
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
}
