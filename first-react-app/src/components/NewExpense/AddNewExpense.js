import "./NewExpense.css";
import { useState } from "react";

const AddNewExpense = (props) => {
   
  const submitHandler = () => {
    props.onAddNewExpenseClick();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default AddNewExpense;
