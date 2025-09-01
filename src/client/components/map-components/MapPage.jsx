import React from "react";
import { useRef, useEffect } from "react";
import Map from "./Map.jsx"
import axios from "axios";


const MapPage = (props) => {

  const fetchMapData = () => {
    axios.get('/api/map')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error('Error fetching map data:', err);
      });
  };

  const sampleMapData = () => {
    axios.post('/api/map', { name: 'Sample POI', coords: [0, 0] })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error('Error fetching map data:', err);
      });
  };

  return (
    <div>
      This is the Map Page
      <button onClick={sampleMapData}>Add Sample Map Data</button>
      <button onClick={fetchMapData}>Fetch Map Data</button>
      <Map />
    </div>
  )
}

export default MapPage;