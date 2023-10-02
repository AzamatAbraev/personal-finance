import React from "react";
import { useParams } from "react-router-dom";

const DebtPage = ({ debts }) => {
  const { debtId } = useParams();
  const { name, deadline, notes, amount } = debts.find(
    (debt) => debt.id === debtId
  );
  const getCurrentDate = () => {
    let currentDay = new Date();
    let IsoFormat = currentDay.toISOString().split("T")[0];
    let response;
    let currentDate = IsoFormat.split("-");
    let deadlineDate = deadline.split("-");
    if (currentDate[0] === deadlineDate[0]) {
      if (currentDate[1] === deadlineDate[1]) {
        let findDifference = +deadlineDate[2] - +currentDate[2];
        response =
          findDifference + " days left until the deadline ! Need Attention !";
      } else {
        response = "The due is not in this month !";
      }
    } else {
      response = "The due is not in this year !";
    }
    return response;
  };

  let countdown = getCurrentDate();
  let IsoFormat = new Date(deadline.split(" "));
  let longDateFormat = IsoFormat.toDateString().split(" ");
  longDateFormat = longDateFormat.slice(-3).join(" ");
  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center"></div>
        <h1 className="debt-page-title py-3">Debt Information</h1>
        <p className="alert alert-danger">
          <span className="text-decoration-underline-hover">{countdown}</span>
        </p>
        <div className="debt-info-card d-flex flex-column w-100 pt-3 pb-3 gap-3">
          <p className="debt-info-desc">
            Name of the borrower:{" "}
               <span className="text-decoration-underline-hover">{name}</span>
          </p>
          <p className="debt-info-desc">
            Borrowed amount:{" "}
            <span className="text-decoration-underline-hover">${amount}</span>
          </p>
          <p className="debt-info-desc">
            Due date:{" "}
            <span className="text-decoration-underline-hover">
              {longDateFormat}
            </span>
          </p>
          <p className="debt-info-desc">
            Notes:{" "}
            <span className="text-decoration-underline-hover">{notes}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DebtPage;
