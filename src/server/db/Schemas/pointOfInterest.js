const mongoose = require('mongoose');
const { Schema } = mongoose;

const pointOfInterestSchema = new Schema({
  // 1 or 0 events to one point
  event: { 
    type: Schema.Types.ObjectId,
    ref: 'Event',
    default: null,
  },
  coords: {
    type: 'array',
    // will always be stored as [longitude, latitude]
    required: true,
  },
  // many points to one user
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});


module.exports.pointOfInterestSchema = pointOfInterestSchema;
