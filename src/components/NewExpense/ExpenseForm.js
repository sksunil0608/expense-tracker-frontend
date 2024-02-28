import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseFrom = () => {

  const [userInput,setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
    })
  const titleChangeHandler = (event) => {
    // setUserInput({...userInput,enteredTitle:event.target.value})
    setUserInput((prevState)=>{
      return {...prevState,enteredTitle:event.target.value}
    })
  };

  const amountChangeHandler = (event) => {
    // setUserInput({...userInput,enteredAmount:event.target.value})
    setUserInput((prevState)=>{
      return {...prevState,enteredAmount:event.target.value}
    })
  };
  const dateChangeHandler = (event) => {
    // setUserInput({...userInput,enteredDate:event.target.value})
    setUserInput((prevState)=>{
      return {...prevState,enteredDate:event.target.value}
    })
  };

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    const expenseData = {
      title:userInput.enteredTitle,
      amount:userInput.enteredAmount,
      date:new Date(userInput.enteredDate)
    }
    console.log(expenseData)
  }
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="expense-form">
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
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseFrom;
