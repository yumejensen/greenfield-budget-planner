const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  email: String,
  googleId: String,
  // itineraries : [{type: Schema.Types.ObjectId, ref: 'Itinerary'}]
});

module.exports.userSchema = userSchema;
