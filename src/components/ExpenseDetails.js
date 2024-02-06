import React from "react";

function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">{props.amount}</div>
        <div>{props.location}</div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
