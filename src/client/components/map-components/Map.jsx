import React from "react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const MAPBOX_API_TOKEN = "pk.eyJ1Ijoiam9lc3BhZiIsImEiOiJjbWJwZzd4M2UwNGZtMnhvZmxzMzd0YzM4In0.cghf9WgnsnrcBinMF4xBSg"

function Map() {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])

    return (
    <>
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default Map;