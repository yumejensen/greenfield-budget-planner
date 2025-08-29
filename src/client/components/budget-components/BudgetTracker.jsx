import React from "react";
import { useState } from "react";

// import other react components
import AddTransaction from "./AddTransaction";
import Transactions from "./Transactions";

function BudgetTracker(){

  // state

  // any helpers needed

  // return with html
  return (
    <div>
      <AddTransaction />
      <Transactions />
    </div>
  )
}

export default BudgetTracker;
