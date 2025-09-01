import React from 'react';
import { CardGroup } from 'react-bootstrap';

import Itinerary from "./Itinerary.jsx"


//take in trips array map over itineraries and serve up one
function ItineraryList({ trips }) {

  return (
    <CardGroup className="mt-3">
      {trips.map((trip, index) => (
        <Itinerary key={index} trip={trip} />
      ))}
    </CardGroup>
  )
}
export default ItineraryList;
