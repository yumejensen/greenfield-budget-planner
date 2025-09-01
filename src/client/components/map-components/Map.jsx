import React from "react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";


const MAPBOX_API_TOKEN = "pk.eyJ1Ijoiam9lc3BhZiIsImEiOiJjbWJwZzd4M2UwNGZtMnhvZmxzMzd0YzM4In0.cghf9WgnsnrcBinMF4xBSg"

function Map() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRef = useRef();

  // get coords when map is doubled clicked
  const onDblClick = (event) => {
    const coords = [event.lngLat.lng, event.lngLat.lat]
    console.log('dblClicked at: ', coords)
  };

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 2,  
      center: [0, 20],
      // disable default map zoom on double click
      doubleClickZoom: false
    });

    // add marker to map on double click
    mapRef.current.on('dblclick', onDblClick);

    // prevents excess api calls
    return () => {
      if (mapRef.current){
        mapRef.current.remove()
      };
      if (markerRef.current) {
        markerRef.current.remove()
      };
    }
  }, [])

    return (
    <>
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default Map;