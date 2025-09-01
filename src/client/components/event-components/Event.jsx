import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Event({event}) {
  
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{event.time} {event.title}</Accordion.Header>
        <Accordion.Body>

          <ListGroup>
            <ListGroup.Item>Location: {event.location}</ListGroup.Item>
            <ListGroup.Item>{event.description}</ListGroup.Item>
          </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
