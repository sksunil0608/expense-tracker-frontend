import { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const [expenses,setExpenses] = useState([])
  const getExpenseDataHandler = (expenseData)=>{
    const newExpense = {
      ...expenseData
    }
    setExpenses((prevExpenses)=>{
      return [...prevExpenses,newExpense]
    });
  }
  return (
    <div>
      <NewExpense onFetchExpenseData = {getExpenseDataHandler}/>
      <Expense expenses= {expenses} />
    </div>
  );
};

export default App;
