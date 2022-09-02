import './App.css';
import ExpenseItem from './components/ExpenseItems';

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

  return (
     

    <div className="App">
     <h1> Lets learn react </h1>
     <ExpenseItem title={expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}></ExpenseItem>

    </div>
  );
}

export default App;
