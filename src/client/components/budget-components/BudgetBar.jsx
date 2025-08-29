import React from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";

// Malleable budget bar that can be used for total budget and daily budget
function BudgetBar(props){

  const { budgetTotal, budgetProgress, mainCurrency, foreignCurrency } = props;

  const percentage = () => {
    return (100 * budgetProgress) / budgetTotal;
  }

  // return with html
  return (
    <ProgressBar now={percentage()} label={`${budgetProgress} / ${budgetTotal}`}/>
  );
}

export default BudgetBar;
