import React from "react";
import { Link } from "react-router-dom";
import { getFarmsRequest, logout } from "../redux/action";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav className="nav-container">
        <div className="logo">
          <img src={"/img/logo/portalLogo.png"} alt="" />
        </div>
        <ul className="nav-menu">
          <Link to="/farm" className="nav-links">
            Farms{" "}
          </Link>

          <Link to="/auth/register" className="nav-links">
            Register
          </Link>

          <Link to="/auth/login" className="nav-links">
            Log in
          </Link>
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
        <div className="logo">
          <img src={"/img/logo/portalLogo.png"} alt="" />
        </div>
        <ul className="nav-menu">
          <Link to="/farm" className="nav-links">
            Farms{" "}
          </Link>
          <Link to="/dashboard" className="nav-links">
            My Farms
          </Link>

          <a onClick={() => dispatch(logout())} className="nav-links">
            Log out
          </a>
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
        <div className="logo">
          <img src={"/img/logo/portalLogo.png"} alt="" />
        </div>

        <ul className="nav-menu">
          <Link to="/admin/dashboard" className="nav-links">
            Admin
          </Link>

          <Link to="/admin/addfarm" className="nav-links">
            Add Farm
          </Link>

          <Link to="/admin/investment" className="nav-links">
            Investments
          </Link>

          <a onClick={() => dispatch(logout())} className="nav-links">
            Log out
          </a>
        </ul>
      </nav>
    </div>
  );
};
