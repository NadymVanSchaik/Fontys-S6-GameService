const express = require('express');
const router = express.Router();

// const got = require('got');
// const { pipeline } = require('stream');

// router.get('/', function(req, res) {
//   const dataStream = got.stream({
//       url: 'https://api.steampowered.com/ISteamApps/GetAppList/v2/',
//     //   qs: {
//     //     api_key: '123456',
//     //     query: 'World of Warcraft: Legion'
//     //   }
//   });
//   pipeline(dataStream, res, (err) => {
//       if (err) {
//           console.log(err);
//           res.sendStatus(500);
//       }
//   });
// });

router.get('/all', (req, res) => {
    res.send('get all games');
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id); 
    res.send('Get by id');
    // etc ...
});

router.get('/popular', (req, res) => {
    res.send('Get popular games');
});

router.get('/new', (req, res) => {
    res.send('Get new games');
});
  
module.exports = router;