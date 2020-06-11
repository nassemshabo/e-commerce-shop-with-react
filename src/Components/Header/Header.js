import React from "react";
import { Link } from "react-router-dom";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

//style
import "./Header.scss";

const Header = () => {
  return (
    <div className="navbar container">
      <h1 className="logo">
        <Link className="links1" to="/">
          Logo
        </Link>
      </h1>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link className="links" to="/shop">
            Shop
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link className="links" to="/sginin">
            Login
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link className="links" to="/shop">
            Contact
          </Link>
        </li>
        <li className="nav-menu-item">
          <FontAwesomeIcon className="icon" icon={faShoppingBag} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
