import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [formOpened, setFormOpened] = useState(false)
  const formDisplayHandler = () => {
    setFormOpened(true)
  }
  const formCloseHandler = () => {
    setFormOpened(false)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      {!formOpened && <button onClick={formDisplayHandler}>Add New Expense</button>}
      {formOpened && <ExpenseForm onFormClose={formCloseHandler} onSaveExpenseData={saveExpenseDataHandler} /> }
    </div>
  )
}

export default NewExpense