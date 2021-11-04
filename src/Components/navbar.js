import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul class="nav-menu">
          <li>
            <a class="nav-links">Home </a>
          </li>
          <li>
            <a class="nav-links">Register</a>
          </li>
          <li>
            <a class="nav-links">Log in</a>
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
