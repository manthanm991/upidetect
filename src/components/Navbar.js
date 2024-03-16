import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            UPI Fraud Detection{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <svg
                className="moon  mt-2"
                width="46"
                height="30"
                onClick={props.toggleMode}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx="11"
                  cy="10"
                  r="11"
                  fill={props.mode === "light" ? "#042743" : "#f8f9fa"}
                />
                <circle
                  cx="14"
                  cy="8"
                  r="9"
                  fill={props.mode === "light" ? "#f8f9fa" : "#212529"}
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
