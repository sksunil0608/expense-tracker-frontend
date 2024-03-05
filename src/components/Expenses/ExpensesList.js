import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  const LocationofExpenditure = "Noida";

  if (props.expenses.length === 0) {
    return (
      <h1 className="expenses-list_fallback">Not any Expense is found!</h1>
    );
  }
  const handleSingleExpense = (
    <h1 className="expenses-list_fallback">
      Only single Expense here. Please add more...!
    </h1>
  );

  return (
    <ul className="expenses-list">
      {props.expenses.length &&
        props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            location={LocationofExpenditure}
          />
        ))}
      {props.expenses.length === 1 && handleSingleExpense}
    </ul>
  );
};

export default ExpensesList;
