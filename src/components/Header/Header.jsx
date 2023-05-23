import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <nav className="navbar-container">
        <ul className="navbar">
          <li>
            <Link to="/"> PRINCIPAL</Link>
          </li>
          <li>
            <Link to="/Ego"> EGO</Link>
          </li>
          <li>
            <Link to="/AlterEgo"> ALTER EGO</Link>
          </li>
          <li>
            <Link to="/SpinOff"> SUPEREGO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
