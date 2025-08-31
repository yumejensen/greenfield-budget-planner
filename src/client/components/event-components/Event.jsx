import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Event() {
  
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>[TIME] [EVENT TITLE]</Accordion.Header>
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
