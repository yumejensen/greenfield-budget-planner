import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Itinerary from "./Itinerary.jsx"
//import AddTripButton from "./AddTripButton"


function ItineraryList() {
  return (
    <CardGroup>
      <Card border="primary" style={{ width: '10rem' }}>
        <Card.Header>
          DAY 1 EVENTS
        </Card.Header>
        <Card.Body>

          <Card.Header>
            ADD AN EVENT
          </Card.Header>

        </Card.Body>
      </Card>

    </CardGroup>
  )
}
export default ItineraryList;
