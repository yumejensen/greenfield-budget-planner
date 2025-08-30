import React from "react";
import { useState } from "react";
import { Form } from 'react-bootstrap';

const CurrencyDropDown = () => {

  // state for dropdown
  const [selected, setSelected] = useState('')

  // handler for selecting
  const handleChange = (e) => {
    // console.log(e.target.value);
    setSelected(e.target.value);
  }

  // return with html
  return (
    <Form.Select onChange={handleChange}>
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
  )
}

export default CurrencyDropDown;
