const { Router } = require('express');
const express = require('express');
const path = require('path');
const axios = require('axios');

require('dotenv').config();

// ---------------API KEY---------------

const { CURRENCY_API_KEY } = process.env;

// ---------------ROUTER----------------

const Currency = Router();

// -------------HELPERS-----------------

const getCurrencyConversion = (from, to, amount) => {

  // FROM - origin currency (currency being used)
  // TO - target currency (convert to this currency)
  // AMOUNT - amount in original currency to convert to target currency

  return axios.get('https://api.currencybeacon.com/v1/convert', {
    params: {
      api_key: CURRENCY_API_KEY,
      from: from,
      to: to,
      amount: amount,
    }
  })
};

// ---------REQUEST HANDLING------------

// GET to get currency conversion
Currency.get('/conversion:from&:to&:amount', (req, res) => {

  // destructure params
  const { from, to, amount } = req.params;
  getCurrencyConversion(from, to, amount)
    .then((data) => {
      console.log(data);
      res.status(200).send(data.response.value)
    })
    .catch((err) => {
      console.error('Failed to GET from Conversion API: SERVER:', err);
      res.status(500).send('oops something went wrong')
    })
});

module.exports = {
  Currency,
};
