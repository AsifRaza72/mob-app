import React, { useState } from "react";
import "./ExpenseForm.css";
// import ErrorModal from "./ErrorModal";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isTitle,setIsTitle]=useState(false)
  const [isTitleFocus,setIsTitleFocus]=useState(true)
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isAmount,setIsAmount]=useState(false)
  const [isAmountFocus,setIsAmountFocus]=useState(true)
  const [enteredDate, setEnteredDate] = useState("");
  const [isEnteredDate,setisEnteredDate]=useState(false)
  const [isDateFocus,setIsDateFocus]=useState(true)

  
  // const validForm = isTitle && isAmount && isEnteredDate;
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    setIsTitle(event.target.value >3 ? true:false)
    }
  const titleBlur=()=>{
    setIsTitleFocus(false)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    setIsAmount(event.target.value >1 ? true:false)
  };
  const AmountBlur=()=>{
    setIsAmountFocus(false)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    setisEnteredDate(event.target.value !=="" ? true:false)
  };
  const DateBlur=()=>{
    setIsDateFocus(false)
  }
  const submitHandler = (event) => {
    event.preventDefault();
      const expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
  
    props.onSaveExpenseData(expensedata);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };


  return (
   
     
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            className="res_ip"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onFocus={titleBlur}
          />
          {!isTitle && !isTitleFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="res_ip"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onFocus={AmountBlur}
          />
           {!isAmount && !isAmountFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            className="res_ip"
            value={enteredDate}
            onChange={dateChangeHandler}
            onFocus={DateBlur}
          />
          {!isEnteredDate && !isDateFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>

  );
};

export default ExpenseForm;