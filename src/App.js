import './App.css';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {title: 'anel de noivado', amount: 50.0, date: new Date(2020, 7, 9)},
    {title: 'curso alura', amount: 720.0, date: new Date(2022, 0, 7)},
    {title: 'crc', amount: 545.0, date: new Date(2023, 0, 31)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
