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

  return (
    <div>
      This is the Map Page
      <button onClick={fetchMapData}>Fetch Map Data</button>
      <Map />
    </div>
  )
}

export default MapPage;