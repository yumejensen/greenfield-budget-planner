import React from "react";
import { Accordion } from "react-bootstrap";

const Transaction = (props) => {

  // destructure props
  const { amount, currencyName, details, createdAt } = props.transaction;

  // return with html
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item>
        <Accordion.Header>{amount} - {currencyName}</Accordion.Header>
        <Accordion.Body>
          {details} - {createdAt}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Transaction;
