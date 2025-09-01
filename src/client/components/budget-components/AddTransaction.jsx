import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, ToggleButton, Form } from "react-bootstrap";

import { tripsSample } from '../../sample-data/sample-data.js'

function AddTransaction(props){

  // destructure props
  let { nativeCurrency, foreignCurrency } = props;

  nativeCurrency = tripsSample[1].nativeCurrency;
  foreignCurrency = tripsSample[1].foreignCurrency;

  // transaction states
  const [transactionAmount, setTransactionAmount] = useState();
  const [transactionDetails, setTransactionDetails] = useState();

  // button states
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  // radio values for currency selector buttons
  const radios = [
    {name: nativeCurrency, value: '1'},
    {name: foreignCurrency, value: '2'}
  ];

  // transaction amount validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // return with html
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Transaction Amount: </Form.Label>
        <Form.Control type="number" placeholder="0.00"/>
      </Form.Group>

      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Transaction Note: </Form.Label>
        <Form.Control type="details" placeholder="optional" />
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit"
        className="buttons"
      >
        Add Transaction
      </Button>
    </Form>
  )
}

export default AddTransaction;