//react imported 
import React from 'react';
import { useState } from "react";

//imported bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import AddTripButton from "./AddTripButton.jsx"
import NewTripForm from "./NewTripForm.jsx"
// import ItineraryList from "./ItineraryList.jsx"
// import Itinerary from "./Itinerary.jsx"


function NewTripPage() {

  //setting up state for the trips array and showing my form or my itineraries.
  const [trips, setTrips] = useState([]);
  const [showMyForm, setMyForm] = useState(false)
  // const [showItineraries, setShowItineraries] = useState(false);


  //logic to add a trip to form
  const addTrip = (trip) => {
    setTrips([...trips, trip]);

  };

  //Here are all components that the newTrip page will render.
  return (

    <Container className="mt-4">
      <h2>My Itineraries Page</h2>


      <AddTripButton onClick={() => setMyForm(!showMyForm)} />
      {showMyForm && <NewTripForm onAddTrip={addTrip} />}

      {/* <Button variant="info" className="mt-3 mt-3" onClick={() => setShowItineraries(!showItineraries)}>
        {showItineraries ? "Hide" : "Show"}
      </Button>
      {showItineraries && <ItineraryList trips={trips} />} */}


    </Container>
  )
}

//export this component to be used.
export default NewTripPage;