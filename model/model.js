// model.js
const mongoose = require("mongoose");
const messageSchema = require("./schema");

const Message = mongoose.model("Message", messageSchema);

async function saveMessage(userId, messageContent) {
  try {
    const newMessage = new Message({
      userId: userId,
      message: messageContent,
    });
    await newMessage.save();
    console.log("Message saved successfully.");
  } catch (err) {
    console.error("Error saving message:", err);
  }
}

module.exports = Message;
