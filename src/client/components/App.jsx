import React, { useState } from "react";
import axios from "axios";

// importing components
import Signin from "./Signin.jsx";
import Homepage from "./Dashboard.jsx";


function App(){

  const [viewType, setViewType] = useState('Signin');

  // make get request to server '/itineraries' to see if user is authenticated
  function getUserAuth() {
    axios.get('/itineraries')
      .then((req) => {
        console.log(req);
      })
      .catch();
  }

  if(viewType === 'Signin'){
    return <Signin userAuth={getUserAuth} />
  } else if (viewType === 'Homepage'){
    return <Homepage />
  }

  // return (
  //   <div>
  //     <Signin />

  //     <Homepage />

  //   </div>

  // )
};

export default App;
