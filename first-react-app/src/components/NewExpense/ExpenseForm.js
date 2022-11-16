import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState({
    currTitle: '',
    currAmount: '',
    currDate: '',
  });

  const titleChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        currTitle: event.target.value
      };
    });
  };

  const amountChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        currAmount: event.target.value
      }
    });
  };

  const dateChange = (event) => {
    setUserInput( (prevState) => {
      return {
        ...prevState,
        currDate: event.target.value
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.currTitle,
      amount: userInput.currAmount,
      date: new Date(userInput.currDate)
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
      currTitle: '',
      currAmount: '',
      currDate: ''
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.currTitle}
            onChange={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChange}
            value={userInput.currAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.currDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
