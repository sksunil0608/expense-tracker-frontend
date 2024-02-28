import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseFrom = () => {

  const [enteredTitle,setEnteredTitle] = useState('')
  const [enteredAmount,setEnteredAmount] = useState('')
  const [enteredDate,setEnteredDate] = useState('')
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };
  return (
    <div className="container">
      <form className="expense-form">
        <div className="">
          <label htmlFor="title" className="input-label">
            Expense Title
          </label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="amount" className="input-label">
            Expense Amount
          </label>
          <input
            type="text"
            id="amount"
            min="1"
            step="0.1"
            className="input-box"
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="date" className="input-label">
            Expense Date
          </label>
          <input
            type="date"
            id="date"
            min="2024-2-11"
            max="2028-10-10"
            className="input-box"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="btn-border">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseFrom;
