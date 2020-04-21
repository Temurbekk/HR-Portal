import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h1 className="navbar-item title">Students Dashboard</h1>
        <div
          className={`navbar-burger ${menuIsDisplayed ? "is-active" : ""}`}
          onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}
        ></div>
      </div>
      <div className={`navbar-menu ${menuIsDisplayed ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Search
          </Link>
          <Link className="navbar-item" to="/Admit">
            New
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
