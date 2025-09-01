import React from "react";
import { useRef, useEffect, useState } from "react";
import Map from "./Map.jsx"
import axios from "axios";
import mapboxgl from "mapbox-gl";


const MapPage = (props) => {

  const [pois, setPois] = useState([])
  // reference to the map object ( allows pins to be added )
  const mapRef = useRef(null)
  // array of map pins
  const markersRef = useRef([])

  const handleMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };

  const clearMarkers = () => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
  };

  const addMarkers = (pois) => {
    if (!mapRef.current){
      // map not loaded yet
      return;
    }
    clearMarkers();
    pois.forEach((poi) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.title = poi.name;

      const pinMarker = new mapboxgl.Marker(el)
        .setLngLat(poi.coords)
        .addTo(mapRef.current);
      markersRef.current.push(pinMarker);
    });
  };

  const fetchMapData = () => {
    axios.get('/api/map', { withCredentials: true })
      .then((res) => {
        setPois(res.data)
        addMarkers(res.data)
      })
      .catch((err) => {
        console.error('Error fetching map data:', err);
      });
  };

  const sampleMapData = () => {
    axios.post('/api/map', { name: 'Sample POI', coords: [0, 0] }, { withCredentials: true })
      .then((res) => {
        fetchMapData();
      })
      .catch((err) => {
        console.error('Error fetching map data:', err);
      });
  };

  const addPin = (pinCoords) => {

    axios.post('/api/map', { name: 'clicky', coords: pinCoords }, { withCredentials: true })
      .then((res) => {
        fetchMapData();
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
      <Map onMapLoad={handleMapLoad} addPin={addPin}/>
    </div>
  )
}

export default MapPage;