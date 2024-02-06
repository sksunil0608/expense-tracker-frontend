import React from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <h2>{props.title}</h2>
        <div className="expense-item_description">
          <div className="expense-item_price">{props.amount}</div>
        </div>
      </div>
      <div style={{ display: "block" }}>{props.location}</div>
    </div>
  );
}

export default ExpenseItem;
