const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  mobileNo: {
    type: String,
    required: true
  },

  washDate: {
    type: String,
    required: true
  },

  washTime: {   // ✅ typo fixed
    type: String,
    required: true
  },

  washingPoint: {
    type: String,
    required: true
  },

  packageType: {
    type: String,
    required: true
  },

  message: {
    type: String
  },

  bookingId: {
    type: Number,
    unique: true,
    required: true
  }

}); // ✅ createdAt, updatedAt auto

module.exports = mongoose.model('User', UserSchema);
