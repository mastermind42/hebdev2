const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function addDays(sl) {
  return `${sl}d`;
}

departmentTypes = ['Produce', 'Grocery', 'Pharmacy', 'Department', 'Meat & Seafood', 'Butcher', 'Deli', 'Dairy', 'Bakery', 'Frozen', 'Packaged' ];

const schema = new Schema({
  ID: Number,
  Description: { type: String, trim: true, maxlength: 20 },
  lastSold: Date,
  ShelfLife: { type: Number, get: addDays},
  Department: { type: String, enum: departmentTypes},
  Price: { type: Number, min: 0 },
  Unit: { type: String, enum: ['lb', 'oz' ,'Each']},
  xFor: { type: Number, min: 0 },
  Cost: { type: Number, min: 0 }
});

module.exports = mongoose.model('store', schema);