const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    enum: ["user"],
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Client = mongoose.model("Client", userSchema);

module.exports = Client;
