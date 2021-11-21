import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { getFarmsRequest, logout } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const changeActiveState = () => {
    setMobile(!mobile);
  };

  return (
    <section className="navbar-section">
      <div className="nav-container">
        <div className="navbar-content">
          <img src={"/img/logo/portalLogo.png"} alt="" className="logo" />
          <div
            className={mobile ? "menu-toggle is-active" : "menu-toggle"}
            id="mobile-menu"
            onClick={changeActiveState}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={mobile ? "nav-menu is-active" : "nav-menu"}>
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
        </div>
      </div>
    </section>
  );
};

export const DashboardNav = () => {
  const dispatch = useDispatch();

  const [mobile, setMobile] = useState(false);
  const changeActiveState = () => {
    setMobile(!mobile);
  };

  return (
    <section className="navbar-section">
      <div className="nav-container">
        <div className="navbar-content">
          <img src={"/img/logo/portalLogo.png"} alt="" className="logo" />
          <div
            className={mobile ? "menu-toggle is-active" : "menu-toggle"}
            id="mobile-menu"
            onClick={changeActiveState}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={mobile ? "nav-menu is-active" : "nav-menu"}>
            <li>
              <Link to="/farm" className="nav-links">
                Farms{" "}
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="nav-links">
                My Farms
              </Link>
            </li>

            <li>
              <a onClick={() => dispatch(logout())} className="nav-links">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
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

  const [mobile, setMobile] = useState(false);
  const changeActiveState = () => {
    setMobile(!mobile);
  };

  return (
    <section className="navbar-section">
      <div className="nav-container">
        <div className="navbar-content">
          <img src={"/img/logo/portalLogo.png"} alt="" className="logo" />
          <div
            className={mobile ? "menu-toggle is-active" : "menu-toggle"}
            id="mobile-menu"
            onClick={changeActiveState}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={mobile ? "nav-menu is-active" : "nav-menu"}>
            <li>
              <Link to="/admin/dashboard" className="nav-links">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/admin/addfarm" className="nav-links">
                Add Farm
              </Link>
            </li>
            <li>
              <Link to="/admin/farms" className="nav-links">
                Farms
              </Link>
            </li>
            <li>
              <Link to="/admin/notification" className="nav-links">
                <BsFillBellFill />
              </Link>
            </li>
            <li>
              <a onClick={() => dispatch(logout())} className="nav-links">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
