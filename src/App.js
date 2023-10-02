import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";

import LoginPage from "./pages/LoginPage";
import TransactionsPage from "./pages/TransactionsPage";
import DebtsPage from "./pages/DebtsPage";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import DebtPage from "./pages/DebtPage";
import { toast } from "react-toastify";

function App() {
  const [debts, setDebts] = useState(
    JSON.parse(localStorage.getItem("debts")) || []
  );
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [debt, setDebt] = useState({
    name: "",
    amount: "",
    deadline: "",
    notes: "",
  });
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newDebts;
      let newDebt = { ...debt, amount: +debt.amount, id: v4() };
      if (selected === null) {
        newDebts = [...debts, newDebt];
        toast.success("Added successfully !");
      } else {
        newDebts = debts.map((debt) => {
          if (debt.id === selected) {
            return newDebt;
          } else {
            return debt;
          }
        });
        toast.info("Edited successfully !");
      }
      localStorage.setItem("debts", JSON.stringify(newDebts));
      handleClose();
      setDebts(newDebts);
    } else {
      setValidated(true);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setDebt({ name: "", amount: "", deadline: "", notes: "" });
    setSelected(null);
  };
  const handleDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };
  const editDebt = (id) => {
    let debt = debts.find((debt) => debt.id === id);
    setSelected(id);
    setDebt(debt);
    setShow(true);
  };
  const deleteDebt = (id) => {
    let deleteConfirm = window.confirm("Do you want to delete the debt ?");
    if (deleteConfirm) {
      let newDebts = debts.filter((debt) => debt.id !== id);
      setDebts(newDebts);
      toast.warning("Deleted successfully !");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="home" element={<HomePage debts={debts} />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route
            path="debts"
            element={
              <DebtsPage
                editDebt={editDebt}
                debt={debt}
                debts={debts}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                validated={validated}
                handleSubmit={handleSubmit}
                handleDebt={handleDebt}
                selected={selected}
                deleteDebt={deleteDebt}
                handleSearch={handleSearch}
                search={search}
              />
            }
          />
          <Route path="debts/:debtId" element={<DebtPage debts={debts} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
