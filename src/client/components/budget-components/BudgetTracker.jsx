import React from "react";
import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

import axios from "axios";

// import other react components
import BudgetBar from "./BudgetBar.jsx";
import AddTransaction from "./AddTransaction.jsx";
import Transactions from "./Transactions.jsx";
import CurrencyDropDown from "./CurrencyDropDown.jsx";
import CurrencyConversion from "./CurrencyConversion.jsx";

function BudgetTracker(){

  // state

  // GET budget from server
  axios.get('/api/budget')

  // GET transactions from server
  axios.get('/api/transactions')

  // return with html
  return (
    <div>

      <BudgetBar />
      <br />
      <CardGroup >
        <Card style={{ width: '20rem' }}>
          <Card.Header><h2>Currency Tools</h2></Card.Header>
          <Card.Body>
            <CurrencyConversion />
            <AddTransaction />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header><h2>Transactions</h2></Card.Header>
          <Card.Body>
            <Transactions />
          </Card.Body>
        </Card>
      </CardGroup>

    </div>
  )
}

export default BudgetTracker;
