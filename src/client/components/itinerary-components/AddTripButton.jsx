import React from 'react';
import Button from 'react-bootstrap/Button';

function AddTripButton({ onClick }) {
  return (
    <Button variant="AddTrip" className="mb-3" onClick={onClick}>
      Add New Trip
    </Button>
  )
}
export default AddTripButton;