import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/ExpenseParent.css";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function ExpenseParent(props) {
  const data = props.data;
  const [currState, setState] = useState("");
  const onChangeHandler = (selectedOption) => {
    setState(selectedOption);
    console.log(selectedOption);
  };

  return (
    <div className="expenses">
      <ExpensesFilter onDrpDwnChange={onChangeHandler} />
      {data.map((element) => {
        return (
          <ExpenseItem
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })}
    </div>
  );
}

export default ExpenseParent;
