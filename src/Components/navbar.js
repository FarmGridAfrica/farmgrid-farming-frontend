import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { getFarmsRequest, logout } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  const { isLoggedIn } = useSelector((state) => {
    const { isLoggedIn } = state.userData;
    return {
      isLoggedIn,
    };
  });

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/admin");
    }
  }, [isLoggedIn]);

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

          <Link to="/admin/farms" className="nav-links">
            Farms
          </Link>
          <Link to="/admin/notification" className="nav-links">
            <BsFillBellFill />
          </Link>

          <a onClick={() => dispatch(logout())} className="nav-links">
            Log out
          </a>
        </ul>
      </nav>
    </div>
  );
};
