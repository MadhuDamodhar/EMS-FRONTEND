import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand btn btn-outline-light" to="/brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="40"
              ms="5"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item btn btn-outline-light ms-5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item btn btn-outline-light ms-3">
                <Link
                  id="nav-link"
                  className="nav-link active"
                  aria-current="page"
                  to="/addEmp"
                >
                  Add Emp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;