import React from "react";
import { useState } from "react";
import axios from "axios";

import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const CurrencyConversion = (props) => {

  // currency selector values
  let [fromCurrency, setFromCurrency] = useState('USD');
  let [toCurrency, setToCurrency] = useState('');

  let [amount, setAmount] = useState(0);

  let [convertedCurrency, setConvertedCurrency] = useState('');

  // default value for testing
  // convertedCurrency = 2000;

  // handler for selecting
  const handleChangeFrom = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleChangeTo = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleClick = () => {
    handleConversion();
  };

  // send GET to server with needed values for API
  const handleConversion = () => {
    axios.get(`/api/currency/conversion:${fromCurrency}&:${toCurrency}&:${amount}`)
      .then((res) => {
        setConvertedCurrency(res.data);
      })
      .catch((err) => {
        console.error("Failed to GET conversion to server: CLIENT:", err);
      })
  };

  // return with html
  return (
    <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>Convert Currency</Card.Title>
        <Form>
          <Row>
            <Col>
              <Form.Select onChange={handleChangeFrom}>
                <option value="USD">$ - USD - U.S. dollar</option>
                <option value="EUR">€ - EUR - Euro</option>
                <option value="JPY">¥ - JPY - Japanese Yen</option>
                <option value="GBP">£ - GBP - Pound sterling</option>
                <option value="CNY">¥ - CNY - Renminbi</option>
                <option value="AUD">$ - AUD - Australian dollar</option>
                <option value="CAD">$ - CAD - Canadian dollar</option>
                <option value="CHF">Fr. - CHF - Swiss franc</option>
                <option value="HKD">HK$ - HKD - Hong Kong dollar</option>
                <option value="SGD">S$ - SGD - Singapore dollar</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select onChange={handleChangeTo}>
                <option value="USD">$ - USD - U.S. dollar</option>
                <option value="EUR">€ - EUR - Euro</option>
                <option value="JPY">¥ - JPY - Japanese Yen</option>
                <option value="GBP">£ - GBP - Pound sterling</option>
                <option value="CNY">¥ - CNY - Renminbi</option>
                <option value="AUD">$ - AUD - Australian dollar</option>
                <option value="CAD">$ - CAD - Canadian dollar</option>
                <option value="CHF">Fr. - CHF - Swiss franc</option>
                <option value="HKD">HK$ - HKD - Hong Kong dollar</option>
                <option value="SGD">S$ - SGD - Singapore dollar</option>
              </Form.Select>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Control placeholder="00.00" type="number" onChange={handleAmountChange}/>
            </Col>
            <Col>
              <Button 
                onClick={handleClick}
                className="buttons"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </Button>
            </Col>
            <Col>
              {convertedCurrency}
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CurrencyConversion;
