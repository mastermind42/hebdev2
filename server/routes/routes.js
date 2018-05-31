const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const store = require('../../models/store');
const tableObject = ['ID', 'Description', 'lastSold', 'ShelfLife', 'Department', 'Price', 'Unit', 'xFor', 'Cost'];

router.get('/', function(req, res){
  res.render('index')
});

router.get('/getTable', (req, res) => {
  res.json(tableObject)
});

router.post('/submit', (req, res) => {
  const searchQuery = req.body.searchQuery;
  store.find({ $and: [{ Department: searchQuery }]}, (err, result) => {
    if(err) console.log(err);
    res.json(result);
  })
});

module.exports = router;