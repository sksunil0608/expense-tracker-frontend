import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [expenseFormActive, setExpenseFormActive] = useState(false);

  const handleExpenseForm = () => {
    setExpenseFormActive(!expenseFormActive);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onFetchExpenseData(expenseData);
  };
  return (
    <div>
      {expenseFormActive && (
        <ExpenseFrom
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={handleExpenseForm}
        />
      )}
      {!expenseFormActive && (
        <button button className="btn-new-expense" onClick={handleExpenseForm}>
          Add Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
