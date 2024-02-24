import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(`${props.amount}$`);
  const clickHandler = () => {
    setTitle("Updated");
    console.log("Clicked");
  };

  const deleteHandler = () => {};
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={price} location={props.location} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={() => setPrice("100$")}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
