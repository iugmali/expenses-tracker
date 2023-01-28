import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useEffect, useState} from "react";

const App = () => {
  const expenses = [
    {id: 'e1', title: 'anel de noivado', amount: 50.0, date: new Date(2020, 7, 9)},
    {id: 'e2', title: 'curso alura', amount: 720.0, date: new Date(2022, 0, 7)},
    {id: 'e3', title: 'crc', amount: 545.0, date: new Date(2023, 0, 31)}
  ]
  const [expensesData, setExpensesData] = useState(expenses)
  const addExpenseHandler = expense => {
    setExpensesData(prevState => {
      return [...prevState, expense]
    })
  }
  useEffect(() => {

  }, [addExpenseHandler])
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
