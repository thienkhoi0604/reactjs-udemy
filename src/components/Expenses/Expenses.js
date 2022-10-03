import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses({ expenses }) {
  const [filter, setFilter] = useState("2020");

  const handleFilterChange = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div className="expenses">
      <ExpenseChart expenses={filterExpenses} />
      <ExpensesFilter selected={filter} onChangeFilter={handleFilterChange} />
      <ExpensesList items={filterExpenses} />
    </div>
  );
}

export default Expenses;
