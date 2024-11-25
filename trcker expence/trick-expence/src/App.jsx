import { useState } from "react";
import "./App.css";
import IncomeModal from "./components/IncomeModal";
import ExpenseModal from "./components/ExpenseModal";

function App() {
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [isIncomModalOpen, setIsIncomModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  const myopenIncomModel = () => {
    setIsIncomModalOpen(true);
  };
 
  const handleIncomModalClose = () => {
    setIsIncomModalOpen(false);
  };

  
  const handleIncome = (amount) => {
  
    setIncome(income + +amount);
    handleIncomModalClose();
  };

  const openExpenseModal = () => {
    setIsExpenseModalOpen(true);
  };


  const closeExpenseModal = () => {
    setIsExpenseModalOpen(false);
  };
  const addExpense = (expense) => {
    const newExpAr = [...expenses, expense];
    setExpenses(newExpAr);
  };
  const handleexpense = (amount, description, category) => {
    setBalance(balance - amount);
    setExpenses([...expenses, { amount, description, category }]);
  };

  return (
    <>
      <div className="container">
        <div className="bg-dark text-white p-3">
          <h1 className="text-center mb-5">Expense Tracker</h1>
          <div className="row">
            <div className="col-md-4 text-center">
              <h3>Amount In</h3>
              <h5 className="text-success">${income}</h5>
              <button className="btn btn-success" onClick={myopenIncomModel}>
                Add Income
              </button>

              <IncomeModal
                handleIncome={handleIncome}
                handleexpense={handleexpense}
                isIncomModalOpen={isIncomModalOpen}
                handleIncomModalClose={handleIncomModalClose}
              />
            </div>

            <div className="col-md-4 text-center">
              <h3>Expenses</h3>
              <h5 className="text-warning">${totalExpense}</h5>
            </div>
           
            <div className="col-md-4 text-center">
              <h3>Balance</h3>
              <h5 className="text-danger">${balance}</h5>
              <button className="btn btn-danger" onClick={openExpenseModal}>Add Expense</button>
              <ExpenseModal
                addExpense={addExpense}
                isExpenseModalOpen={isExpenseModalOpen}
                closeExpenseModal={closeExpenseModal}
              />
            </div>
          </div>
        </div>
        <div className="p-3 bg-white">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/2023</td>
                <td>Payment</td>
                <td>Salary</td>
                <td>$5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
