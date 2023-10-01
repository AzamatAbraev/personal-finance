import React from "react";
import { Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

import "./DebtsCard.css";
import { Link } from "react-router-dom";

const DebtsCard = ({id, name, deadline, amount, notes, editDebt, deleteDebt}) => {
  return (
    <div className="debts-card d-flex align-items-center justify-content-between">
      <div className="debts-content d-flex flex-column">
        <h3 className="debts-name">
          {name}
          <span className="badge bg-success debts-amount">${amount}</span>
        </h3>
        <div className="date-note d-flex align-items-center gap-3">
          <p className="debts-deadline">{deadline} </p>
          <Link to={`/debts/${id}`} className="text-white notes-link">
            <span className="pr-3 line">|</span> Read Notes
          </Link>
        </div>
      </div>
      <div className="debts-note">
        <Link title="Click to read more info" to={`/debts/${id}`} className="debts-comment">
          Notes: {notes.slice(0, 50)}
        </Link>
      </div>
      <div className="debts-control d-flex gap-2">
        <Button onClick={() => editDebt(id)}>Edit</Button>
        <Button onClick={() => deleteDebt(id)} variant="danger">Delete</Button>
      </div>
    </div>
  );
};

DebtsCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  deadline: PropTypes.string,
  amount: PropTypes.number,
  notes: PropTypes.string,
};

export default DebtsCard;
