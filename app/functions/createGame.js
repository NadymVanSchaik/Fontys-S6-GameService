const Game = require('../models/Game')

function createGame(game){
    const newGame = new Game({
        name: game.name,
        short_description: game.short_description,
        header_image: game.header_image,
        release_date: game.release_date,
        last_updated: Date.now(),
    })
    return newGame
}

module.exports = createGame;