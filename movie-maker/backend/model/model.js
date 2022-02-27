const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: String
})

modules.exports = new mongoose.model('Movie', movieSchema)
