import React from "react";
import { Link } from "react-router-dom";
import { getFarmsRequest, logout } from "../redux/action";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul className="nav-menu">
          <li>
            <Link to="/farm" className="nav-links">
              Farms{" "}
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
  const dispatch = useDispatch();

  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul className="nav-menu">
          <Link to="/farm" className="nav-links">
            Farms{" "}
          </Link>
          <li>
            <a className="nav-links">My Farms</a>
          </li>
          <li>
            <a onClick={() => dispatch(logout())} className="nav-links">
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const AdminNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <img src="" alt="" />
        <ul className="nav-menu">
          <li>
            <a className="nav-links">Admin</a>
          </li>
          <li>
            <a className="nav-links">Add Farm</a>
          </li>
          <a onClick={() => dispatch(logout())} className="nav-links">
            Log out
          </a>
        </ul>
      </nav>
    </div>
  );
};
