import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [title, settitle] = useState(props.title);
  const titleHandler = (props) => {
    settitle("updated title");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <div>
        <button onClick={titleHandler}>Update</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
