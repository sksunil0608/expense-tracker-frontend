import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2021, 2, 28),
      title: "Cart Insurance",
      amount: 345,
    },
    {
      id: 3,
      date: new Date(2021, 2, 28),
      title: "Cart Insurance",
      amount: 345,
    },
    {
      id: 2,
      date: new Date(2021, 2, 28),
      title: "Cart Insurance",
      amount: 345,
    },
  ];
  const LocationofExpenditure = "Noida";
  return (
    <div className="App">
      {expenses.map((expense, i) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          location={LocationofExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
