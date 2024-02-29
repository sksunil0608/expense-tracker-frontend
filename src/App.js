import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const getExpenseDataHandler = (expenseData)=>{
    const newExpenseData = {
      ...expenseData
    }
    console.log(newExpenseData)
  }
  return (
    <div>
      <NewExpense onFetchExpenseData = {getExpenseDataHandler}/>
      <Expense />
    </div>
  );
};

export default App;
