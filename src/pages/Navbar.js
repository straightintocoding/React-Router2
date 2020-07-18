import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo row">
          <i className="fab fa-sketch" />
          <h2>Ratul</h2>
        </Link>
        <div className="row navbtn">
          <button>
            <NavLink to="/"> Home</NavLink>
          </button>
          <button>
            <NavLink to="/Contact"> CONTACT </NavLink>
          </button>
          <button>
            <NavLink to="/About">About </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
