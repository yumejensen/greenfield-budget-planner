import React from 'react';
import Button from 'react-bootstrap/Button';

function AddTripButton({ onClick }) {
  return (
    <Button primary="AddTrip" onClick={onClick} className="mb-2">
      Add A New Trip To Itinerary
    </Button>
  )
}

export default AddTripButton;