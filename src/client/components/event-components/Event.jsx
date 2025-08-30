import React from 'react'
import { AccordionBody } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function Event() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>10:00am Museum</Accordion.Header>
        <Accordion.Body>

          <ListGroup>
            <ListGroup.Item>Location: NOMA</ListGroup.Item>
            <ListGroup.Item>Description: See new exhibit and then eat beignets</ListGroup.Item>
            <ListGroup.Item>Estimated Cost: $35.00</ListGroup.Item>
          </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Event;