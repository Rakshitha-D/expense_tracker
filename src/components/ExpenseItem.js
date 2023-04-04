import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>{" "}
      {/* can be written ass <ExpenseDate/> if there is no content between the opening and closing tag*/}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
