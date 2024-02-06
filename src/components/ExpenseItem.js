import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  const ExpenseDate = new Date(2021, 2, 28);
  const ExpenseTitle = "Car Insurence";
  const ExpenseAmount = 12345;
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toString()}</div>
      <h2>{ExpenseTitle}</h2>
      <div className="expense-item_description">
        <div className="expense-item_price">Amount:{ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
