import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// taking the expenses as same name as passing props from the parent componen
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const onChangeHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };
  // this code is filtering the expenses with the inbuild funtion of the java script file 
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={onChangeHandler}
      />
      <ExpensesChart expenses = {filteredExpenses}/>
      
      <ExpensesList expenses = {filteredExpenses} />
    </Card>
  );
};

export default Expenses;
