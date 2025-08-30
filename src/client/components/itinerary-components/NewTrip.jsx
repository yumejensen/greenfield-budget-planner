import React from 'react';
import { useState } from "react";

import AddTripButton from "./AddTripButton.jsx"
import NewTripForm from "./NewTripForm.jsx"
import ItineraryList from "./ItineraryList.jsx"
import Itinerary from "./Itinerary.jsx"

function NewTrip () {
  //setting up state for the trips and for the new trip form
  

  return (
    <div>
        <AddTripButton />
        <NewTripForm />
        <ItineraryList />
        <Itinerary />

    </div>
  )
}

//export this component to be used.
export default NewTrip;