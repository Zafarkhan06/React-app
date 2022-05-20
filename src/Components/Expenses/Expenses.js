import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveExpenseFilter = (filteredData) => {
    setFilteredYear(filteredData);
    console.log("Expense.js here");
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onsaveFilter={saveExpenseFilter}
      ></ExpensesFilter>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}
export default Expenses;
