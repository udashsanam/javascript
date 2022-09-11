import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

// taking the expenses as same name as passing props from the parent componen
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const onChangeHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={onChangeHandler}
      />
      {
        expenses.map( (expense,index)=> {
          // here key is passed because react will rerender all the repeated component whene the componen is called 
          return  <ExpenseItem 
          key = {expense.id}
           title = {expense.title} 
           date = {expense.date}
            amount = {expense.amount} />
        })
      }
    </Card>
  );
};

export default Expenses;
