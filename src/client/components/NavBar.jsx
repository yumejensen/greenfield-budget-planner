import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
  return (
        <Navbar expand="sm" className="navbar">
          <Container>

              <NavLink to="/dashboard">
                <Navbar.Text >Dashboard</Navbar.Text>
              </NavLink>
     
              <NavLink to="/itineraries">
                <Navbar.Text>Itineraries</Navbar.Text>
              </NavLink>
   
              <NavLink to="/event">
                <Navbar.Text>Events</Navbar.Text>
              </NavLink>
   
              <NavLink to="/map">
                <Navbar.Text>Map</Navbar.Text>
              </NavLink>
      
              <NavLink to="/budget">
                <Navbar.Text>Budget</Navbar.Text>
              </NavLink>
          
              <Navbar.Text> Travel Chum </Navbar.Text>
       
          </Container>
        </Navbar>

  );
}

export default Navigation;