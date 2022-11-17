import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/ExpenseParent.css";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseParent(props) {
  const [currState, setState] = useState("2022");
  const onChangeHandler = (selectedOption) => {
    setState(selectedOption);
  };

  const filteredExpenses = props.data.filter((el) => {
    return el.date.getFullYear().toString() === currState;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currState} onDrpDwnChange={onChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList data={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default ExpenseParent;
