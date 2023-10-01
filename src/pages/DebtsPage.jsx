import React from "react";

import "./css/Debts.css";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import DebtsCard from "../components/card/DebtsCard";

const DebtsPage = ({
  debts,
  show,
  handleShow,
  handleClose,
  validated,
  handleSubmit,
  debt,
  handleDebt,
  editDebt,
  selected,
  deleteDebt,
  search,
  handleSearch,
}) => {
  const debtsFound = debts.filter(debt => debt.name.toLowerCase().includes(search))
  return (
    <section id="debts">
      <div className="container">
        <div className="debts-input py-3">
          <InputGroup className="mb-3">
            <Form.Control
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <Button onClick={handleShow} variant="primary">
              Add Debt
            </Button>
          </InputGroup>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Debt Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  onChange={handleDebt}
                  value={debt.name}
                  type="text"
                  placeholder="Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please try again !
                </Form.Control.Feedback>
              </Form.Group>
              <div className="row mb-3">
                <Form.Group className="col-6" controlId="deadline">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control
                    required
                    onChange={handleDebt}
                    value={debt.deadline}
                    type="date"
                    placeholder="Deadline"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please try again !
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-6" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    required
                    onChange={handleDebt}
                    value={debt.amount}
                    type="number"
                    placeholder="Amount"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please try again !
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <Form.Group controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  required
                  onChange={handleDebt}
                  value={debt.notes}
                  as="textarea"
                  type="text"
                  placeholder="Enter notes"
                />
                <Form.Control.Feedback type="invalid">
                  Please try again !
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                {selected === null ? `Add` : `Save`} debt
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        <div className="debts-row">
          {debtsFound.map((debt) => (
            <DebtsCard
              deleteDebt={deleteDebt}
              editDebt={editDebt}
              key={debt.id}
              {...debt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DebtsPage;
