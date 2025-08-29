import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "../../style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORT COMPONENTS
import Template from "./components/TemplateComponent.jsx";
import App from "./components/App.jsx";
import Signin from "./components/Signin.jsx";
import Dashboard from "./components/Dashboard.jsx";
import newItinerary from "./components/itinerary-components/MyTripPage.jsx";
import EventList from "./components/event-components/EventList.jsx";
import Map from "./components/map-components/map.jsx";
import BudgetBar from "./components/budget-components/BudgetBar.jsx"

const router = createBrowserRouter([
  {path: '/', element: <Signin />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/itineraries', element: <newItinerary />},
  {path: '/event', element: <EventList />},
  {path: '/map', element: <Map/>},
  {path: '/budget', element: <BudgetBar />},
  {path: '*', element: <Template defaultProp={'404'}/>},
  
])

const app = createRoot(document.getElementById('app'))

// add header and footer into here?
app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
