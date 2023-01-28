import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <>
      <ExpensesFilter />
      <Card className="expenses">
        { props.items.map( item => (
          <ExpenseItem {...item} />
        )) }
      </Card>
    </>
  )
}

export default Expenses