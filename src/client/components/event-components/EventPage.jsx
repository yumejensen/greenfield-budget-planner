// React and Bootstrap
import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

// Components
import EventList from './EventList.jsx'
import CreateEvent from './CreateEvent.jsx'
import EventCalendar from './EventCalendar.jsx'


export default function EventPage() {


  return (
    
    <CardGroup>
      
      <Card border="primary" style={{ width: '25rem' }}>
      <Card.Header>
        <h4>[TRIP TITLE] [DAY X]</h4>
      </Card.Header>

        <Card.Body>
          <CreateEvent />
        </Card.Body>
   
        <Card.Body>
          <EventList />
        </Card.Body>
      </Card>

        <Card border="primary" style={{ width: '25rem' }}>
          <Container>
            <br></br>
            <EventCalendar />
          </Container>
        </Card>

    </CardGroup>
  );
}

