// React and Bootstrap
import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

// Components
import Event from './Event.jsx'
import CreateEvent from './CreateEvent.jsx'
import Calendar from './Calendar.jsx'

function EventList() {
  return (
    <Card border="primary" style={{ width: '30rem' }}>
      <Card.Header>
        DAY 1 EVENTS
      </Card.Header>

      <Card.Body>

        <Event />

      <Card.Header>
        ADD AN EVENT
      </Card.Header>

        <CreateEvent />

        <Calendar />

      </Card.Body>
    </Card>
  );
}



export default EventList;
