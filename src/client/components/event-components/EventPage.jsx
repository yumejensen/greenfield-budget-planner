// React and Bootstrap
import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

// Components
import EventList from './EventList.jsx'
import CreateEvent from './CreateEvent.jsx'
import EventCalendar from './EventCalendar.jsx'


function EventPage() {
  return (
    <CardGroup>

      <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header>
          DAY 1 EVENTS
        </Card.Header>
        <Card.Body>
          <EventList />

        <Card.Header> 
          ADD AN EVENT
        </Card.Header>
          <CreateEvent />
        </Card.Body>
      </Card>

        <Card border="primary" style={{ width: '30rem' }}>
          <Container>
            <EventCalendar />
          </Container>
        </Card>


    </CardGroup>
  );
}



export default EventPage;