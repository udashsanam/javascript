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
  // this code is filtering the expenses with the inbuild funtion of the java script file 
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

    let contentToLoad = <p> no expense for selected year </p>

    if(filteredExpenses.length > 0 ){
      contentToLoad =  filteredExpenses.map((expense, index) => {
        // here key is passed because react will rerender all the repeated component whene the componen is called
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })
    }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={onChangeHandler}
      />
      {/* all the logic for this is written on the above part  */}
     {contentToLoad}
    </Card>
  );
};

export default Expenses;
