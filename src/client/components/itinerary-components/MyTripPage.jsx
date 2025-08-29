import React from 'react';

import AddTripButton from "/AddTripButton"
import NewTripForm from "/NewTripForm"

function newItinerary () {
  return (
    <div>
      <h1>
        whats up
        <AddTripButton />
        <NewTripForm />
      </h1>

    </div>
  )
}

//export this component to be used.
export default newItinerary;