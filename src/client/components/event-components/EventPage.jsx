// React and Bootstrap
import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// Components
import EventList from './EventList.jsx'
import CreateEvent from './CreateEvent.jsx'
import EventCalendar from './EventCalendar.jsx'

// sample data
import trip from './sample-data-events.js'

export default function EventPage() {

  // pull from db for state
  // pass down events data into eventlist

  return (
    
    <CardGroup>
      
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Header>
          <h4> {trip.title} </h4>
        </Card.Header>

        <Card.Body>
          <CreateEvent />
        </Card.Body>
   
        <Card.Body>
          <EventList events={trip.events}/>
        </Card.Body>
      </Card>

      <Card border="dark" style={{ width: '25rem' }}>
        <Container>
          <br></br>
          <EventCalendar />
        </Container>
      </Card>

    </CardGroup>
  );
}

