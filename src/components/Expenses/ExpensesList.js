import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  } else return (
    <ul className="expenses-list">
      { props.items.map( item => (
          <ExpenseItem key={item.id} {...item} />
      )) }
    </ul>
  )
}

export default ExpensesList