const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tutorial = new Schema(
  {
    title: { type: String, required: true },
    channel: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    embedUrl: { type: String, required: true },
    tags: { type: [String], required: false },
    playlist: { type: Boolean, required: false },
    comments: { type: [{}], required: false },
  },
  { timestamps: true },
)

module.exports = mongoose.model('tutorials', Tutorial)