import React from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";

// Malleable budget bar that can be used for total budget and daily budget
function BudgetBar(props){

  let { budgetTotal, budgetProgress, mainCurrency, foreignCurrency } = props;

  // test data
  budgetTotal = 600;
  budgetProgress = 150;
  mainCurrency = '$';
  foreignCurrency = '¥';

  // percentage calculation helper for bar progress
  const percentage = () => {
    return (100 * budgetProgress) / budgetTotal;
  }

  // return with html
  return (
    <ProgressBar animated now={percentage()} label={`${mainCurrency}${budgetProgress} / ${mainCurrency}${budgetTotal}`}/>
  );
}

export default BudgetBar;
