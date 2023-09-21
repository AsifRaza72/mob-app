import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseDataHandler = (expensesdata) => {


    console.log(expensesdata);
    props.onReceiveData(expensesdata)

  }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={expenseDataHandler}/>
      
    </div>
  );
};
export default NewExpense;