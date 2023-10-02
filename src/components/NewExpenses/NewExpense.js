import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const expenseDataHandler = (enteredexpensesdata) => {
    const newexpensedata = {
      ...enteredexpensesdata,
      id: Math.random().toString()
    };
    props.onAddExpenseData(newexpensedata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
