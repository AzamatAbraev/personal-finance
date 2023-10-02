import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Layout.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container d-flex align-items-center justify-content-between ">
          <Link to="/home" className="nav-logo header__logo">
            monthly <span className="logo__span">budget</span>
          </Link>
          <ul className="nav-menu d-flex align-items-center gap-3 links-wrapper">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link header__item">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/transactions" className="nav-link header__item">
                Expenses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/debts" className="nav-link header__item">
                Debts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
