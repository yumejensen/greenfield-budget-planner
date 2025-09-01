//import react and react hooks {use state}
import React from 'react';
// import { useState } from "react";

//import bootstrap components button and form.
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//make a function takes in prop onAddTrip
function NewTripForm({ onAddTrip }) {

  //initializing state object for form inputs
  // const [formData, setFormData] = useState({
  //   title: '',
  //   start: '',
  //   end: '',
  //   nativeCurrency: '',
  //   foreignCurrency: '',
  //   budget: '',
  // });

  //supposed to update the state with changes from form
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

//   const handleSubmit = (e) => {

// }

  return (
    <Form className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Trip Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter trip title"  />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <Form.Control name="start" type="date"  />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>End Date</Form.Label>
        <Form.Control name="end" type="date" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Native Currency</Form.Label>
        <Form.Control name="nativeCurrency" type="text"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Foreign Currency</Form.Label>
        <Form.Control name="foreignCurrency" type="text"  />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Budget</Form.Label>
        <Form.Control name="budget" type="number"  />
      </Form.Group>

      <Button variant="primary" type="submit">Add Trip</Button>
    </Form>
  );
}


export default NewTripForm;