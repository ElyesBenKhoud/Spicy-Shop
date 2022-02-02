import React from "react";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar black navbar-expand-lg fixed-top navbar-dark header">
      <div className="container">
        <a className="navbar-brand" href=" ">
          <img src={logo} className="d-inline-block align-middle" alt="" />
          Andreia Spicy online Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-sm-0 d-md-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto nav-pills">
            <li className="nav-item active">
              <a className="nav-link" href=" ">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href=" ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
