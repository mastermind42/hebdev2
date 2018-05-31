const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res){
  res.render('index')
});

router.get('/test', (req, res) => {
  console.log('test');
  res.json('hellOOOO!!!');
})

module.exports = router;