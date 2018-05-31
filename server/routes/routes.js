const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const store = require('../../models/store');

router.get('/', function(req, res){
  res.render('index')
});

router.get('/test', (req, res) => {
  console.log('test');
  res.json('hellOOOO!!!');
})

router.post('/submit', (req, res) => {
  console.log('submitting!!!');
  const searchQuery = req.body.searchQuery;
  store.find({ $and: [{ Department: searchQuery }]}, (err, result) => {
    if(err) console.log(err);
    console.log(result);
    res.json(result);
  })
});

module.exports = router;