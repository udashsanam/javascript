import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div className= "expense-item">
      <div> 2022 -09-02 </div>
      <div className= "expense-item__description">
        <h1> Food </h1>
        <div className="expense-item__price">  Rs 200 </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
