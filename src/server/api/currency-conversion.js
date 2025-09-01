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

// const getCurrencyConversion = (from, to, amount) => {

//   // FROM - origin currency (currency being used)
//   // TO - target currency (convert to this currency)
//   // AMOUNT - amount in original currency to convert to target currency

//   const url = `https://api.currencybeacon.com/v1/convert?api_key=${CURRENCY_API_KEY}&from=${from}&to=${to}&amount=${amount}`;

//   return axios.get(url);
// };

// ---------REQUEST HANDLING------------

// GET to get currency conversion
Currency.get('/conversion:from&:to&:amount', (req, res) => {

  // destructure params
  let { from, to, amount } = req.params;

  from = from.slice(1);
  to = to.slice(1);
  amount = amount.slice(1);

  axios.get(`https://api.currencybeacon.com/v1/convert?api_key=${CURRENCY_API_KEY}&from=${from}&to=${to}&amount=${amount}`)
    .then((conversion) => {
      res.status(200).json(conversion.data.value)
    })
    .catch((err) => {
      console.error('Failed to GET conversion from API: Server', err);
    });
});

module.exports = {
  Currency,
};
