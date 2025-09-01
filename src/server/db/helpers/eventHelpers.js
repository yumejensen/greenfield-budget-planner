const mongoose = require('mongoose');

// Trip model from index.js
const { Trip, Event } = require('../index.js');


// -----------------HELPERS--------------------

// // get all events
// const getEvents = () => {
//     return Event.find({})
//     .then((events) => {console.log('all events:', events)})
//     .catch((err) => {console.log('could not get events', err)})
// }

// // post an event to the db
// const postEvents = () => {

// }
