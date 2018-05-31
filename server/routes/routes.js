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

async function searchAlg(searchQuery, entireDB) {
  const result = entireDB.reduce((accumulator, current) => {
    for(key in searchQuery) {
      if(current[key] !== searchQuery[key]) {
        return accumulator;
      }
    }
    accumulator.push(current);
    return accumulator;
  }, [])
  return result;
}

router.post('/submit', (req, res) => {
  const searchQuery = req.body.searchQuery;
  console.log(searchQuery);
  store.find({}, (err, result) => {
    if(err) console.log(err);
    searchAlg(searchQuery, result).then(results => res.json(results));
  });
});

module.exports = router;