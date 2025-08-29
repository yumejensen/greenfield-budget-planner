import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateEvent() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="eventInput">
        <Form.Label>Event Title</Form.Label>
        <Form.Control type="email" placeholder="Ex: Breakfast" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="locationInput">
        <Form.Label>Location</Form.Label>
        <Form.Control type="password" placeholder="Ex: Maple Cafe" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionInput">
        <Form.Label>Description</Form.Label>
        <Form.Control type="password" placeholder="Ex: Meet with Dave" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="costInput">
        <Form.Label>Estimated Cost</Form.Label>
        <Form.Control type="password" placeholder="Ex: $30.00" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create Event
      </Button>
    </Form>
  );
}

export default CreateEvent;
