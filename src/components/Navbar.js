import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ openModal }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>

          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" onClick={openModal}>
                  個人資料
                </a>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  登入
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  註冊
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
