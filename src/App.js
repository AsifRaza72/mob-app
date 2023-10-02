import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import intial_expenses from "./components/Expenses/InitialExpenses"

function App() {
  const [expenses, setExpenses] = useState(intial_expenses);
  const addExpenseData = (expensedata) => {
    setExpenses((prevExpenses) => [expensedata, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;