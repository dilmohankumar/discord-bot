// schema.js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  userId: String, // User ID of the sender
  message: String, // Message content
  timestamp: { type: Date, default: Date.now }, // Timestamp for when the message was saved
});

module.exports = messageSchema;
