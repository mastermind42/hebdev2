const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/routes.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended:false }));

mongoose.connect('mongodb://<admin>:<password1>@ds137740.mlab.com:37740/heb');

app.use('/', router);

module.exports=app;