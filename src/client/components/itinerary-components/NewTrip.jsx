import React from 'react';
import { useState } from "react";

import AddTripButton from "./AddTripButton.jsx"
import NewTripForm from "./NewTripForm.jsx"
import ItineraryList from "./ItineraryList.jsx"
import Itinerary from "./Itinerary.jsx"

function NewTrip () {
  return (
    <div>
      <h1>

        <AddTripButton />
        <NewTripForm />
        <ItineraryList />
        <Itinerary />
      </h1>

    </div>
  )
}

//export this component to be used.
export default NewTrip;