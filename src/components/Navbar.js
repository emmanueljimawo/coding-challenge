import React from "react";
import "./Navbar.css";
import logo from "../images/bptn-logo.png";

import { Link } from "react-router-dom";

function Navbar() {
  const avatarLink =
    "https://media-exp1.licdn.com/dms/image/C4D03AQFNDlFccnDhyg/profile-displayphoto-shrink_800_800/0/1637833791880?e=1663804800&v=beta&t=4fPH-ABon5rpMXRgZTFHPhAhLMqqgYukTJD4p8699D4";
  return (
    <div>
    <nav className="navbar navbar-dark navbar-expand-md fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            width="300"
            height="100"
            style={{ width: "158px", height: "50px" }}
            alt="Logo"
          />
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/liked" className="nav-link">
                Liked Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link disabled">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link disabled">
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link disabled">
                New &amp; Popular
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-md-inline">
          <i
            className="fas fa-search me-3 text-white"
            style={{ fontSize: "18px" }}
          ></i>
          <span className="me-3" style={{ position: "relative" }}>
            <i
              className="fas fa-bell text-white"
              style={{ fontSize: "18px" }}
            ></i>
            <span
              className="badge rounded-pill bg-danger"
              style={{
                fontSize: "8px",
                position: "absolute",
                left: "5px",
                top: "-2px",
              }}
            >
              2
            </span>
          </span>
          <img
            className="rounded-circle"
            src={avatarLink}
            style={{ height: "50px" }}
            alt="avatar"
          />
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
