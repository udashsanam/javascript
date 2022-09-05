import React, {useState, useEffect} from 'react';
import './App.css';
// import ExpenseItem from './components/ExpenseItems';
import Expenses from './components/Expenses/Expenses'; 
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const [expenses, setExpenses] = useState([
    {
      title:"food",
      amount:2345.45,
      date: new Date(2022, 2, 13)
    },
    {
      title:"cloth",
      amount:23452.45,
      date: new Date(2022, 2, 14)
    },
    {
      title:"rent",
      amount:2345.45,
      date: new Date(2022, 2, 15)
    },
    {
      title:"game",
      amount: 2343.34,
      date: new Date(2022, 2, 16)
    }
  ]
  );
  // this is how react is crating the html in behind the scene 
  // return React.createElement('div', {}, 
  // React.createElement('h2', {}, "Lets learn readfct "), 
  // React.createElement(Expenses, {items: expenses}));



  const addExpenseHandler = (expense) => {
    const  data = {
      title: expense.title,
      amount: expense.amount,
      date: expense.date
    };
    
    // 
    setExpenses(preState => {
      return([...preState, data]);
    })
  }
 

  return (
     
    <div >
      <NewExpense   onExpenseSave = {addExpenseHandler} />
    <Expenses expenses={expenses} ></Expenses>
    </div>
  );
}

export default App;
