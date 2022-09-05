import './NewExpense.css';
import ExpenseForm  from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        console.log(" i am from new expense");
    }


    return (
        <div className="new-expense">
                <ExpenseForm  items = {props.items} onSaveExpenseData = {saveExpenseDataHandler} />
        </div> 
    )
}

export default NewExpense;