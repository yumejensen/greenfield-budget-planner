import axios from 'axios'

// React and Bootstrap
import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// Components
import EventList from './EventList.jsx'
import CreateEvent from './CreateEvent.jsx'
import EventCalendar from './EventCalendar.jsx'

// sample data
import tokyoTrip from '../../sample-data/sample-data-tokyoTrip.js'

export default function EventPage() {

  // let [events, setEvents] = useState([]);
  // // pass down events data into eventlist
  
  // const getEvents = () => {
  //   // pull events array from db and update events state
  //   axios.get('/api/events')
  //   .then(() => {})
  //   .catch(()=> {})
  // }

  return (
    
    <CardGroup>
      
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Header>
          <h4> {tokyoTrip.title} </h4>
        </Card.Header>

        <Card.Body>
          <CreateEvent />
        </Card.Body>
   
        <Card.Body>
          <EventList events={tokyoTrip.events}/>
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

