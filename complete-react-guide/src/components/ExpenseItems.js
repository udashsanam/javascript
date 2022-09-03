import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
function ExpenseItem(props) {
  // const expenseDate= new Date(2022, 2, 14);
  // const expenseTitle = 'Food';
  // const expenseAmount = 234.45;
  return (
    <div className= "expense-item">
      {/* <div>   {(props.date).toISOString()} </div> */}
      <ExpenseDate date = {props.date} > </ExpenseDate>
      <div className= "expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">  Rs {props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
