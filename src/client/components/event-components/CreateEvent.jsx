import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

export default function CreateEvent() {
  
  // update state with changes from the form
  
  // handleChange to detect inputs from the form + update state
  const handleChange = (e) => {
    
  }

  // add the event to the db on clicking the 'Add to List' button

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Create an Event</Accordion.Header>
        <Accordion.Body>

        <Form>
          <Form.Group className="mb-3" controlId="eventInput">
            <Form.Label>Event Title</Form.Label>
            <Form.Control type="text" placeholder="Ex: Breakfast" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="timeInput">
            <Form.Label>Start Time</Form.Label>
            <Form.Control type="number" placeholder="Ex: 10:00" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="locationInput">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Ex: Maple Cafe" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descriptionInput">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Ex: Meet with Dave" />
          </Form.Group>
            
          <Button className="buttons" type="submit">
            Add to List
          </Button>
        </Form>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

