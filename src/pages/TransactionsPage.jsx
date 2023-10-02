import React from "react";
import TransactionCard from "../components/card/TransactionCard";

import "./css/Transactions.css"

const TransactionsPage = () => {
  const expenses = [
    {
      category: "Transportation",
      amount: "100",
      description: "paid for a bus ride",
    },
    {
      category: "Food",
      amount: "450",
      description: "eat out at a restaurant",
    },
    {
      category: "Grocery",
      amount: "678",
      description: "bought vegetables for a week",
    },
    {
      category: "Housing",
      amount: "550",
      description: "paid for a house rent",
    },
  ];
  const totalExpenses = () => {
    let sum = 0;
    for (let el of expenses) {
      sum += +(el.amount);
    }
    return sum;
  }
  // let totalAmount = totalExpenses();
  // console.log(totalAmount);
  return (
    <section className="">
      <div className="container">
        <h1 className="transaction-title pt-5">Expenses</h1>
        <div className="transaction-card-row">
          {expenses.map((expense) => (
            <TransactionCard {...expense} />
          ))}
        </div>
        <div className="transaction-total">
          <p className="alert alert-info mt-3">Total Expenses: <span className="text-danger">${totalExpenses()}</span></p>
        </div>
      </div>
    </section>
  );
};

export default TransactionsPage;
