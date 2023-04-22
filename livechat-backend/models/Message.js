const mongoose = require('mongoose')

const { Schema, model } = mongoose

const MessageSchema = new Schema({
  message: String,
  from: String
})

const Message = model('Message', MessageSchema)

module.exports = Message
