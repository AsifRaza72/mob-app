import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart"; 
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const onChangeYearHandler = (selectedyear) => {
    setSelectedYear(selectedyear);
  };
  const filteredexpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  let expenseContent = <p>No Expenses Found</p>;
  if (filteredexpenses.length > 0) {
    expenseContent = filteredexpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
    <ExpensesChart dataPoints = {filteredexpenses}></ExpensesChart>
      <ExpenseFilter
        selected={selectedYear}
        onSelectedYear={onChangeYearHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expenses;