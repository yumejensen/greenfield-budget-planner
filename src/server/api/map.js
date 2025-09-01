const { Router } = require('express');
const express = require('express');
const path = require('path');
const axios = require('axios');
const { POI } = require('../db/index.js');
const Map = Router();


Map.get('/', (req, res) => {
  if (!req.user || !req.user.id) {
    console.error('no user');
    return res.status(401).json({ error: 'log in, bud' });
  }
  POI.find({ userid: req.user.id })
    .then((pois) => {
      const clean = pois.map((poi) => {
        // obscure _id and userid
        return { name: poi.name, coords: poi.coords, event: poi.event};
      });
      res.json(clean);
    })
    .catch((err) => {
      console.error('Error fetching POIs:', err);
      res.status(500).json({ error: 'Server Error' });
    });
});

Map.post('/', (req, res) => {
  console.log('POI creation attempt');
  if (!req.user || !req.user.id) {
    console.log('no user');
    return res.status(401).json({ error: 'log in, bud' });
  }
  const { name, coords } = req.body;
  POI.create({ name, coords, userid: req.user.id })
    .then((newPOI) => {
      console.log('POI created:', newPOI);
      res.status(201).json(newPOI);
    })
    .catch((err) => {
      console.error('Error creating POI:', err);
      res.status(500).json({ error: 'Server Error' });
    });
});

module.exports = {
  Map,
};