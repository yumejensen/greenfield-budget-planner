const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: Number,
  currencyName: String,
  currencySymbol: String,
  details: String,
  createdAt: Date,
})

module.exports.transactionSchema = transactionSchema;
