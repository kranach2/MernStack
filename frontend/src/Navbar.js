import React from "react";
import { Link } from "react-router-dom";
import "./css/NavbarStyle.css";

const Navbar = () => {
  return (
    <div className="navbarStyle">
      <h1 className="header">MERN Practice</h1>
      <ul className="unl">
        <li className="lis">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="lis">
          <Link className="link" to="/membership">
            Membership
          </Link>
        </li>
        <li className="lis">
          <Link className="link" to="/memberlist">
            Members
          </Link>
        </li>
        <li className="lis">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
