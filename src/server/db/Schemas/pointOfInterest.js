const mongoose = require('mongoose');
const { Schema } = mongoose;

const pointOfInterestSchema = new Schema({
  name: { 
    type: String,
    required: true,
    default: async function() {
      // Count existing POIs for this user
      if (!this.user) return "Point of Interest"
      const count = await mongoose.model('POI').countDocuments({ user: this.user })
      return `Point of Interest ${count + 1}`
    }
  },
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
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});


module.exports.pointOfInterestSchema = pointOfInterestSchema;
