import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
  return (
    <>
      <Row md={5}>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/dashboard">
                Dashboard link
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/itineraries">
                Itineraries link
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/event">
                Event link
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/map">
                Map link
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/budget">
                Budget link
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
    </>
  );
}

export default Navigation;