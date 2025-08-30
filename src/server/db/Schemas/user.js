const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  email: String,
  googleId: String,
  trips : [{type: Schema.Types.ObjectId, ref: 'Trip'}]
});

module.exports.userSchema = userSchema;
