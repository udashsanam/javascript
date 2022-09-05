import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = ({expenses}) => {
  console.log("Yo test", expenses)
  return (
    <Card className="expenses">
      {expenses &&
        expenses.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          );
        })}
    </Card>
  );
};

export default Expenses;
