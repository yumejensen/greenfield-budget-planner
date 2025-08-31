import React from 'react';
import { useState } from "react";

import AddTripButton from "./AddTripButton.jsx"
import NewTripForm from "./NewTripForm.jsx"
import ItineraryList from "./ItineraryList.jsx"
import Itinerary from "./Itinerary.jsx"

function NewTrip () {
  //setting up state for the trips and for the new trip form
  const [myTrips, setMyTrip] = useState([]);
  const [showMyForm, setMyForm] = useState(false)

  //logic to add a trip
  const addTrip = (trip) => {
    setMyTrip([...myTrips, trip])
  }

  //Here are all components that the newTrip page will render.
  return (
    <div>

        <AddTripButton onClick={() => setMyForm(!showMyForm)}/>
          {showMyForm && <NewTripForm onAddTrip={addTrip} />}
        <NewTripForm />
        <ItineraryList myTrips={myTrips} />
        <Itinerary />

    </div>
  )
}

//export this component to be used.
export default NewTrip;