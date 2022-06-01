const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    name: String,
    short_description: String,
    header_image: String,
    release_date: String,
    steam_appid: Number,
})

module.export = mongoose.model('Games, GameSchema')