import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul className="nav-menu">
          <li>
            <Link to="/plan" className="nav-links">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/auth/register" className="nav-links">
              Register
            </Link>
          </li>
          <li>
            <Link to="/auth/login" className="nav-links">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const DashboardNav = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul className="nav-menu">
          <li>
            <a className="nav-links">Packages</a>
          </li>
          <li>
            <a className="nav-links">My Packages</a>
          </li>
          <li>
            <a className="nav-links">Log out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const AdminNav = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul className="nav-menu">
          <li>
            <a className="nav-links">Admin</a>
          </li>
          <li>
            <a className="nav-links">Log out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
