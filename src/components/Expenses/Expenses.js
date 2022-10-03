import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses({ expenses }) {
  const [filter, setFilter] = useState("2020");

  const handleFilterChange = (selectedYear) => {
    setFilter(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter selected={filter} onChangeFilter={handleFilterChange} />
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
