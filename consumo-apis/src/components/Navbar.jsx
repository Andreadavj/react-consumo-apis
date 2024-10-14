import React from "react";

const Navbar = ({ total }) => {
  const token = true; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
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
          <div className="navbar-nav">
            <a
              className="nav-link btn btn-outline-success me-2"
              aria-current="page"
              href="#"
            >
              Home 🍕
            </a>
            {token ? (
              <>
                <a className="nav-link btn btn-outline-success me-2" href="#">
                  Profile 👨‍💻
                </a>
                <a className="nav-link btn btn-outline-success me-2" href="#">
                  Logout 🔐
                </a>
              </>
            ) : (
              <>
                <a className="nav-link btn btn-outline-success me-2" href="#">
                  Login 🚪
                </a>
                <a className="nav-link btn btn-outline-success me-2" href="#">
                  Register 🔐
                </a>
              </>
            )}
          </div>
          <div className="navbar-nav ms-auto">
            <a className="nav-link btn btn-outline-success" href="#">
              🛒 Total: ${total.toLocaleString()}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
