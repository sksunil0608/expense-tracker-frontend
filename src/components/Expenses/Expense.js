import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

export default function Expense() {
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
    <Card className="expenses">
      {expenses.map((expense, i) => (
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
