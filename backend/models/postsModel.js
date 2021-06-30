const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String
});

module.exports = mongoose.model('Posts', postSchema)