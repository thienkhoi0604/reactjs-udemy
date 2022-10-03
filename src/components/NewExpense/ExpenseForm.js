import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const handleTitleChange = (event) => {
    setTitleInput(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmountInput(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };

    onSaveExpenseData(expenseData);
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={titleInput}
            onChange={(e) => handleTitleChange(e)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amountInput}
            onChange={(e) => handleAmountChange(e)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateInput}
            onChange={(e) => handleDateChange(e)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
