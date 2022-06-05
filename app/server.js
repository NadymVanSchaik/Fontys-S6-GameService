const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const mongoose = require('mongoose')
require('dotenv/config')

const config = {
    name: 'game-service',
    port: 3001,
    host: '0.0.0.0',
};

const app = express();
app.listen(config.port, () => {console.log("Server started and listing on ${config.port}")});
const logger = log({ console: true, file: false, label: config.name });


app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Import
const gamesRoute = require('./routes/games');
app.use('/games', gamesRoute);


//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION) 
.then(() =>{
    console.log("connected to DB");
})
.catch(err => {
    console.log(err)
})

//Get games from steam every 7 days
/*var cron = require('node-cron');
const got = require('got');
const { pipeline } = require('stream');
const Game = require('./models/Game')
app.use(bodyParser.json());

cron.schedule('0 1 * * *', () => {
    getGamesFromSteam()
  }, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
  });

function getGamesFromSteam() {
    const dataStream = got.stream({
        url: 'https://api.steampowered.com/ISteamApps/GetAppList/v2/',
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            dataStream.appList.forEach(element => {
                Game.update('_id', element.appId, { upsert: true })
            });
        }
    });       
}*/