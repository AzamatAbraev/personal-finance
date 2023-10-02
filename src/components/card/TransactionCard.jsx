import React from "react";

import expense from "../../assets/images/expense.svg";
import transportationFrame from "../../assets/images/transportation-frame.svg";

import "./TransactionCard.css";

const TransactionCard = ({ category, amount, description }) => {
  return (
    <div className="transaction-card d-flex">
      <div className="transaction-card-left d-flex">
        <div className="transaction-card-image d-flex">
          <img className="icon" src={expense} alt="Transportation" />
          <img className="frame" src={transportationFrame} alt="Circle Frame" />
        </div>
        <div className="transaction-card-content">
          <h3 className="transaction-card-title">{category}</h3>
          <p className="transaction-card-desc">{description}</p>
        </div>
      </div>
      <div className="transaction-card-right">
        <p className="transaction-card-stats">${amount}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
