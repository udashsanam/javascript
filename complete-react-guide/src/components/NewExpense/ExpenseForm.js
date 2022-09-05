import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  
  // state which will store the entered title with defaul empty string
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [items, setItems] = useState(props.items);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  // event object is default object from event handler like onchange, onPress etc
  const titleChangeHandler = (event) => {
    // setting the state value to enterd title
    setEnteredTitle(event.target.value);

    // console.log(enteredTitle);
    // console.log(items);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // });



  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // console.log(enteredDate);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })

    // this method is used when the new state is depend on the previous state 
    // setUserInput( (prevStatue) => {
    //     return {
    //       ...useState,
    //       enteredDate:event.target.value
    //     };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate)
    }

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

  };

  return (
    <form className="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-10-15"
            max="2022-10-15"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          {" "}
          Add New Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
