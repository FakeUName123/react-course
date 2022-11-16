import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/ExpenseParent.css";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

function ExpenseParent(props) {
  const [currState, setState] = useState("2021");
  const onChangeHandler = (selectedOption) => {
    setState(selectedOption);
  };

  const filteredExpenses = props.data.filter((el) => {
    return el.date.getFullYear() == currState;
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((element) => {
      return (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currState} onDrpDwnChange={onChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpenseParent;
