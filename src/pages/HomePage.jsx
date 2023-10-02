import React from "react";

import debtholders from "../assets/images/debtholders.svg";
import debtamount from "../assets/images/debtamount.svg";
import statistics from "../assets/images/statistics-background.avif";
import "./css/Home.css";

const HomePage = ({ debts }) => {
  const getDebtsAmount = () => {
    let sum = 0;
    let totalSum;
    for (let debt of debts) {
      totalSum = sum += debt.amount;
    }
    return totalSum;
  };
  let totalDebts = getDebtsAmount();
  return (
    <section className="pb-5">
      <div className="container">
        <div className="home-header">
          <h2 clasyarsName="home-title">Welcome Back</h2>
          <p className="home-subtitle">
            Here is the information about your debts
          </p>
        </div>
        <div className="home-row">
          <div className="home-card">
            <div className="home-card-desc">
              <p className="home-card-stats">{debts.length}</p>
              <p className="home-card-text">Total Number of Debtholders</p>
            </div>
            <div className="home-card-img">
              <img className="home-image" src={debtholders} alt="Debtholders" />
            </div>
          </div>
          <div className="home-card">
            <div className="home-card-desc">
              <p className="home-card-stats">10 days</p>
              <p className="home-card-text">Average refund time</p>
            </div>
            <div className="home-card-img">
              <img className="home-image" src={debtholders} alt="Debtholders" />
            </div>
          </div>
          <div className="home-card">
            <div className="home-card-desc">
              <p className="home-card-stats">${totalDebts}</p>
              <p className="home-card-text">Total Amount of Debt</p>
            </div>
            <div className="home-card-img">
              <img className="home-image" src={debtamount} alt="Debtholders" />
            </div>
          </div>
        </div>
        <img className="w-100 mt-5 mb-5" src={statistics} alt="Statistics" />
      </div>
    </section>
  );
};

export default HomePage;
