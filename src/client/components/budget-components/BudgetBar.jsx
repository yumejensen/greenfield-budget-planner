import React from "react";
import { useState } from "react";

// Malleable budget bar that can be used for total budget and daily budget
function BudgetBar(props){

  // state
  const [budgetTotal, budgetProgress] = useState()

  // helper to move the progress in the bar


  // return with html
  return (
    <div className='budget-bar'>
      <div className='budget-progress'>
        10%
      </div>
    </div>
  );
}

export default BudgetBar;
