const { Router } = require('express');
const express = require('express');
const path = require('path');
const axios = require('axios');

const { Event } = require('../index.js');

// ---------------ROUTER----------------

const Events = Router();

// -------------HELPERS-----------------

// GET all the events from the db
Events.get('/api/events', (req, res) => {
  Event.find({})
    .then((events) => {
      res.status(200);
      res.send(events);
    })
    .catch((err) => {
      console.log('failed to get events from db:', err);
    });
});

// // POST an event to the db
// Events.post('/api/events', (req, res) => {
//   Event.create({

//   })
//     .then(() => {
//       res.status(201);
//     })
//     .catch((err) => {
//       console.log('failed to post an event to db:', err);
//     });
// });

module.exports = {
  Events,
};