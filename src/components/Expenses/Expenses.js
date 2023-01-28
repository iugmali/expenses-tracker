import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      { props.items.map( item => (
        <ExpenseItem {...item} />
      )) }
    </Card>
  )
}

export default Expenses