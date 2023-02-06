const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  verifyExp: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('token', tokenSchema)