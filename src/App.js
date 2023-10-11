import { useState,Fragment } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
 import intial_expenses from "./components/Expenses/InitialExpenses"
import "./components/UI/Card.css"

function App() {
  const [expenses, setExpenses] = useState(intial_expenses);
  const addExpenseData = (expensedata) => {
    setExpenses((prevExpenses) => [expensedata, ...prevExpenses]);
  };

  return (
    <Fragment className="card">
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses items={expenses} />
    </Fragment>
  );
}

export default App;