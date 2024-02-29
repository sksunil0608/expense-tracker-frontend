import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

export default function Expense({expenses}) {
  console.log(expenses)
  const LocationofExpenditure = "Noida";
  return (
    <Card className="expenses">
      {expenses.length!==0 && expenses.map((expense, i) => (
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
