const mongoose = require('mongoose');
const { Schema } = mongoose;

// trip to events is a 1:n relationship
const eventSchema = new Schema({
    eventDay: Date,
    time: String,
    title: String,
    description: String,
    location: String,
    // all the events are tied to one trip
    trip: { type: Schema.Types.ObjectId, ref: 'Trip'}
});


module.exports.eventSchema = eventSchema;
