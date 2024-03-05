import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
export default function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2024");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterdExpenses = expenses.filter((expense) => {
    const year = new Date(expense.date).getFullYear().toString();
    return year === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdExpenses} />
      <ExpensesList expenses={filterdExpenses} />
    </Card>
  );
}
