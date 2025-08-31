const mongoose = require('mongoose');
const { Schema } = mongoose;

const tripSchema = new Schema({
    // user to trips is a 1:n 
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    // trip to events is a 1:n 
    events : [{type: Schema.Types.ObjectId, ref: 'Event'}],
    title: String,
    start: Date,
    end: Date,
    nativeCurrency: String,
    foreignCurrency: String,
    budget: Number
});


module.exports.tripSchema = tripSchema;
