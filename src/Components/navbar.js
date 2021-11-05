import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul class="nav-menu">
          <li>
            <Link to="/plan" class="nav-links">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/auth/register" class="nav-links">
              Register
            </Link>
          </li>
          <li>
            <Link to="/auth/login" class="nav-links">
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
        <ul class="nav-menu">
          <li>
            <a class="nav-links">Packages</a>
          </li>
          <li>
            <a class="nav-links">My Packages</a>
          </li>
          <li>
            <a class="nav-links">Log out</a>
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
        <ul class="nav-menu">
          <li>
            <a class="nav-links">Admin</a>
          </li>
          <li>
            <a class="nav-links">Log out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
