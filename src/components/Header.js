import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="left">
        <Link to="/">
          <h1>Fashionify</h1>
        </Link>
      </div>
      <div className="right">
        <Link className="shop" to="/shop">
          Shop
        </Link>
        <Link className="about" to="/about">
          About
        </Link>
        <Link className="cart" to="/shopping-cart">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
