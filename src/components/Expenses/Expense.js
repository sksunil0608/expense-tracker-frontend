import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const LocationofExpenditure = "Noida";
  return (
    <Card className="expenses">
      {
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      }
      {expenses.length !== 0 &&
        expenses
          .filter((expense) => {
            const year = new Date(expense.date).getFullYear().toString();
            return year === filteredYear;
          })
          .map((expense, i) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
              location={LocationofExpenditure}
            />
          ))}
    </Card>
  );
}
