const express = require('express');
const router = express.Router();
const Game = require('../models/Game')
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json();

router.get('/all', (req, res) => {
    res.send('get all games');
});

router.get('/:id', async (req, res, next) => {
    try{
        const game = await Game.findById(req.params.id).exec();
        console.log(game)
        res.json(game)
    } catch(err){
        res.json({message: err});
    }
});

router.get('/popular', (req, res) => {
    res.send('Get popular games');
});

router.get('/new', (req, res) => {
    res.send('Get new games');
});
  
//Test to see whether I can post to DB
router.post('/', jsonParser, (req, res) => {
    console.log(req.body);
    const game = new Game({
        name: req.body.name,
        short_description: req.body.short_description,
        header_image: req.body.header_image,
        release_date: req.body.release_date,
        last_updated: Date.now(),
    });
    game.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({message: err})
        })
})
module.exports = router;