const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    name: String,
    short_description: String,
    header_image: String,
    release_date: String,
    last_updated: Date,
})

module.exports = mongoose.model('Game', GameSchema)