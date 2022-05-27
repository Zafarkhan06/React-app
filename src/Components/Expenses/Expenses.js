import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveExpenseFilter = (filteredData) => {
    setFilteredYear(filteredData);
    console.log("Expense.js here");
  };
  const filterHandler=props.items.filter(expense =>{return expense.date.getFullYear().toString()===filteredYear});

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onsaveFilter={saveExpenseFilter}
      ></ExpensesFilter>
      {filterHandler.length===0?<h1>No Expenses</h1>:filterHandler.map((expense) => (  <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>))
      }
      
    </div>
  );
}
export default Expenses;
