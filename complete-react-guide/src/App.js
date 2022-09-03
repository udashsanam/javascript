import React from 'react';
import './App.css';
// import ExpenseItem from './components/ExpenseItems';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
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
  ];

  // this is how react is crating the html in behind the scene 
  // return React.createElement('div', {}, 
  // React.createElement('h2', {}, "Lets learn readfct "), 
  // React.createElement(Expenses, {items: expenses}));

  return (
     
    <div >
     <h1> Lets learn react </h1>
    <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
