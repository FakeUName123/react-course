import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/ExpenseParent.css";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

function ExpenseParent(props) {
  const [currState, setState] = useState("2020");
  const onChangeHandler = (selectedOption) => {
    setState(selectedOption);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currState} onDrpDwnChange={onChangeHandler} />
        {props.data.map((element) => {
          return (
            <ExpenseItem
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default ExpenseParent;
