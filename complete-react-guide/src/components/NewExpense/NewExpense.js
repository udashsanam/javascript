import './NewExpense.css';
import ExpenseForm  from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onExpenseSave(enteredExpenseData);
    }


    return (
        <div className="new-expense">
                <ExpenseForm  onSaveExpenseData = {saveExpenseDataHandler} />
        </div> 
    )
}

export default NewExpense;