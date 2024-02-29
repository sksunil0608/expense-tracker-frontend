import React from 'react';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onFetchExpenseData(expenseData)
    }
  return (
    <div>
      <ExpenseFrom onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
