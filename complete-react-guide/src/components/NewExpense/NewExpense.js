import './NewExpense.css';
import ExpenseForm  from './ExpenseForm';

const NewExpense = (props) => {


    return (
        <div className="new-expense">
                <ExpenseForm  items = {props.items}/>
        </div> 
    )
}

export default NewExpense;