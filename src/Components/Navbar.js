import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode==="light"?"secondary":"black"}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==="light"?"black":"white"}`} to="/">
          {props.title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className={`nav-link active text-${props.mode==="light"?"black":"white"}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==="light"?"black":"white"}`} to="/about">
                {" "}
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==="light"?"black":"white"}}>
              {props.mode==="light"?"Dark":"Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: "Set tittle here",
  aboutText: "About"
};
