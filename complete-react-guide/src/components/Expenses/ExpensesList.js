import ExpenseItem from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <p className="expenses-list__fallback"> no expense for selected year </p>
    );
  }

  //   we passed under the tag because we must send jsx under any root element
  return (
    <div className="expenses-list">
         {props.expenses.map(
        (expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        )
        // here key is passed because react will rerender all the repeated component whene the componen is called
      )}
    </div>
     
    
  );
};

export default ExpensesList;
