const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({

  username: String,
  // itineraries : [{type: Schema.Types.ObjectId, ref: 'Itinerary'}]
});




module.exports.userSchema = userSchema

