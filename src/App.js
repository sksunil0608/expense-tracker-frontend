import "./App.css";
import Expense from "./components/Expenses/Expense";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
const App = () => {
  return (
    <div>
      <ExpenseForm/>
      <Expense />
    </div>
  );
};

export default App;
