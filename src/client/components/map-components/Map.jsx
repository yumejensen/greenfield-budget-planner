import React from "react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";


const MAPBOX_API_TOKEN = "pk.eyJ1Ijoiam9lc3BhZiIsImEiOiJjbWJwZzd4M2UwNGZtMnhvZmxzMzd0YzM4In0.cghf9WgnsnrcBinMF4xBSg"

function Map(props) {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRef = useRef();

  // const { markers } = props

  // markers.current.forEach((marker) => {
  //   const el = document.createElement('div');
  //   el.className = 'marker';
  //   el.style.width = '30px';
  //   el.style.height = '30px';
  //   el.style.backgroundSize = '100%';
  //   el.title = marker.name;

  //   const pinMarker = new mapboxgl.Marker(el)
  //     .setLngLat(marker.coords)
  //     .addTo(mapRef.current);
  //     // markerRef.current = pinMarker
  // });

  // get coords when map is doubled clicked
  const onDblClick = (event) => {
    const coords = [event.lngLat.lng, event.lngLat.lat]
    console.log('dblClicked at: ', coords)
    props.addPin(coords)
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

    if(props.onMapLoad) {
      props.onMapLoad(mapRef.current);
    }

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
      <div id='map-container' ref={mapContainerRef} style={{width: '80vh', height: '60 vh'}}/>
    </>
  )
}

export default Map;