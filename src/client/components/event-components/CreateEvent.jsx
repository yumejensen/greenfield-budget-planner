// react
import React from 'react'
import { useState } from 'react'

// bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';


export default function CreateEvent() {
  
  // make a state for each form element
  let [eventTitle, setEventTitle] = useState('');
  let [startTime, setStartTime] = useState(0);
  let [location, setLocation] = useState('');
  let [description, setDescription] = useState('');
  
  // update state with changes from the form
  const handleTitle = (e) => {
    setEventTitle(e.target.value)
  }
    const handleTime = (e) => {
    setStartTime(e.target.value)
  }
    const handleLocation = (e) => {
    setLocation(e.target.value)
  }
    const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  
  const addEvent = () => {
    // add the event to the db on clicking the 'Add to List' button
    // make a request to server to add info to DB

  }

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Create an Event</Accordion.Header>
        <Accordion.Body>

        <Form>
          <Form.Group controlId="eventInput">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              onChange={handleTitle} 
              type="text" 
              placeholder="Ex: Breakfast" 
            />
          </Form.Group>

          <Form.Group controlId="timeInput">
            <Form.Label>Start Time</Form.Label>
            <Form.Control 
              onChange={handleTime} 
              type="number" 
              placeholder="Ex: 10:00" 
            />
          </Form.Group>

          <Form.Group controlId="locationInput">
            <Form.Label>Location</Form.Label>
            <Form.Control 
              onChange={handleLocation} 
              type="text" 
              placeholder="Ex: Maple Cafe" 
            />
          </Form.Group>

          <Form.Group controlId="descriptionInput">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              onChange={handleDescription} 
              as="textarea" 
              rows={2} placeholder="Ex: Meet with Dave" 
            />
          </Form.Group>
            
          <Button 
            
            className="buttons" 
            type="submit">
            Add to List
          </Button>
        </Form>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

