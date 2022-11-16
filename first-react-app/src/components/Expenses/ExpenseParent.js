import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/ExpenseParent.css";

function ExpenseParent(props) {
  const data = props.data;
  return (
      <div className="expenses">
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
