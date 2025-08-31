import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewTripForm() {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Trip</Form.Label>
        <Form.Control type="email" placeholder="Where to next?" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Add New Trip
      </Button>
    </Form>
  );
}

export default NewTripForm;