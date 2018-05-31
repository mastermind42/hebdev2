const mongoose = require('mongoose');
const storeModel = require('../models/store');
const fs = require('fs');

mongoose.connect('mongodb://app:password1@ds137740.mlab.com:37740/heb');

const db = mongoose.connection;

async function getData() {
  const data = await new Promise((res, rej) => {
    fs.readFile(`${__dirname}/data.txt`, 'utf8', (err, data)=> {
      if(err) rej(err);
      else res(data);
    });
  })
  const analyzed = data.split('\n');
  const obj = analyzed.map((line) => {
    const arr = line.split(',');
    return new storeModel({
      ID: arr[0],
      Description: arr[1],
      lastSold: arr[2],
      ShelfLife: arr[3].slice(0, -1),
      Department: arr[4],
      Price: arr[5].substr(2),
      Unit: arr[6],
      xFor: arr[7],
      Cost: arr[8].substr(2),
    });
  });
  return obj;
}

db.on('open', () => {
  getData().then((obj) => {
    const ifError = obj.map(o => new Promise((res, rej) => {
      o.save(err => {
        if(err) return rej(err);
        else(res('Success'));
      });
    }));
    Promise.all(ifError).then(res => console.log(res));
  });
});
