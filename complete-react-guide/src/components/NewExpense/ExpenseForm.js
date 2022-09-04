import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // state which will store the entered title with defaul empty string
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [items, setItems] = useState(props.items);

  // event object is default object from event handler like onchange, onPress etc
  const titleChangeHandler = (event) => {
    // setting the state value to enterd title
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle);
    // console.log(items);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enteredDate);
  };

  const clickHandler = () => {
    const item = {
      title: { enteredTitle },
      amount: { enteredAmount },
      date: { enteredDate },
    };
    setItems({ ...items, ...item });
    console.log(items);
  };

  return (
    <form className="">
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
        <button type="submit" onClick={clickHandler}>
          {" "}
          Add New Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
