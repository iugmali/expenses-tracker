import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState} from "react";

const DUMMY_EXPENSES = [
]

const App = () => {
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpensesData(prev => [expense, ...prev])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
