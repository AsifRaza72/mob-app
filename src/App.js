import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense"
function App() {
const expenses=[
  {title:"car insurance", amount:6000, date:new Date(2023,9,13)},
  {title:"car seat", amount:7000, date:new Date(2023,9,13)},
  {title:"car tyres", amount:8000, date:new Date(2023,9,13)},
  {title:"car lights", amount:9000, date:new Date(2023,9,13)},
];
const receiveDataHandler=(expenseData)=>{
 console.log(expenseData);
}

 return(
  <div>
  <NewExpense onReceiveData={receiveDataHandler} />
  <Expenses items={expenses}/>
  
  </div>
  );
}

export default App;
