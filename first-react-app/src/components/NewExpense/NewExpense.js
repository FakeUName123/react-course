import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import { useState } from "react";

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseData = (userInput) => {
    const expenseData = {
      ...userInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    onActionExpenseHandler();
  };

  const onActionExpenseHandler = () => {
    setFormState(!formState);
  };

  const expenseContent = () => {
    if (formState) {
      return (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancelClick={onActionExpenseHandler}
        ></ExpenseForm>
      );
    } else {
      return (
        <AddNewExpense
          className="new-expense"
          onAddNewExpenseClick={onActionExpenseHandler}
        ></AddNewExpense>
      );
    }
  };

  return <div className="new-expense">{expenseContent()}</div>;
};

export default NewExpense;
