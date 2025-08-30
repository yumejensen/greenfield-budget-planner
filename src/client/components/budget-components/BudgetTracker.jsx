import React from "react";
import { useState } from "react";
import axios from "axios";

// import other react components
import BudgetBar from "./BudgetBar.jsx";
import AddTransaction from "./AddTransaction.jsx";
import Transactions from "./Transactions.jsx";
import CurrencyDropDown from "./CurrencyDropDown.jsx";

function BudgetTracker(){

  // state

  // GET budget from server
  axios.get('/api/budget')

  // GET transactions from server
  axios.get('/api/transactions')

  // return with html
  return (
    <div>
      <h1>Budget Tracker</h1>
      <CurrencyDropDown />
      <BudgetBar />
      <AddTransaction />
      <Transactions />
    </div>
  )
}

export default BudgetTracker;
