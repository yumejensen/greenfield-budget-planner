import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "../../style.css"
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";


// IMPORT COMPONENTS
import Template from "./components/TemplateComponent.jsx";
import Navigation from "./components/NavBar.jsx";
import App from "./components/App.jsx";
import Signin from "./components/Signin.jsx";
import Dashboard from "./components/Dashboard.jsx";
import NewTrip from "./components/itinerary-components/NewTrip.jsx";
import EventPage from "./components/event-components/EventPage.jsx";
import MapPage from "./components/map-components/MapPage.jsx";
import BudgetTracker from "./components/budget-components/BudgetTracker.jsx"

// make an element to protect the inner elements
const PrivateRoutes = () => {
  let auth = {'token':true}
  return (
      auth.token ? <Outlet/> : <Navigate to='/'/>
    )
}

const app = createRoot(document.getElementById('app'))

// add header and footer into here?
app.render(
  <BrowserRouter>

    <Navigation />
    <br></br>

    <Routes>

      <Route path='/' element={<Signin />} />

      <Route element={<PrivateRoutes/>}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='itineraries' element={<NewTrip />} />
        <Route path='event' element={<EventPage />} />
        <Route path='map' element={<MapPage />} />
        <Route path='budget' element={<BudgetTracker />} />
      </Route>

      <Route path="*" element={<p>There is nothing here: 404!</p>} />

    </Routes>
    
  </BrowserRouter>
);
