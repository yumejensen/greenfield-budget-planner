import React from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Signin(props){
  
  // props destructuring
  const { userAuth } = props

  return (
    <Container>
        <Row>
          <h1>Travel Chum</h1>
        </Row>
        <Row>
          <p>Your all-in-one travel planning and budgeting buddy!</p>
        </Row>
        <Row>
          <a href='/auth/google'>
            <Button variant="primary"
              type="button" 
              className="btn btn-outline-info" 
              onClick={() => {
                userAuth();
              }}>
                Sign-in
            </Button>
          </a>
        </Row>
    </Container>
  )
}

export default Signin;
