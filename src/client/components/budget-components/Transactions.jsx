import React from "react";
import { useState } from "react";

import { transactionsNewOrleans, transactionsTokyo } from '../../sample-data/sample-data.js'

// import other react components
import Transaction from "./Transaction.jsx";

const Transactions = () => {

  // state

  // any helpers needed

  // return with html
  return (
    <div>
      { transactionsTokyo.map((transaction) => {
        return <Transaction transaction={transaction} key={transaction.details}/>
      }) }
    </div>
  )
}

export default Transactions;
