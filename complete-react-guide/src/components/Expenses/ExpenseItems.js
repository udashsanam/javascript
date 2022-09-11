import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';
const ExpenseItem = (props) => {
  // const expenseDate= new Date(2022, 2, 14);
  // const expenseTitle = 'Food';
  // const expenseAmount = 234.45;


  // const [title, setTitle] = useState(props.title);

  // eventhaldler funciton 
  // const clickHandler = () => {

  //   // this will call the jsx again and change the value to the variable into the react 
  //   setTitle('update');
  
  //   console.log(title);
  // }

  return (
    <Card className= "expense-item">
      {/* <div>   {(props.date).toISOString()} </div> */}
      <ExpenseDate date = {props.date} > </ExpenseDate>
      <div className= "expense-item__description">
        <h2> {props.title}</h2>
        {/* we are using reusable component card for css here also  */}
        <Card className="expense-item__price">  Rs {props.amount} </Card>
      </div>

    </Card>
  );
}

export default ExpenseItem;
