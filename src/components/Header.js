import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = ({ amountInCart }) => {
  const handleMenu = (btn) => {
    btn.target.classList.toggle("active");
    document.querySelector(".sandwich").classList.toggle("active");
  };
  return (
    <header>
      <div className="left">
        <Link to="/">
          <h1>Fashionify</h1>
        </Link>
      </div>
      <div className="right">
        <Link className="shop" to="/">
          Home
        </Link>
        <Link className="shop" to="/shop">
          Shop
        </Link>
        <Link className="about" to="/about">
          About
        </Link>
        <Link className="cart" to="/shopping-cart">
          <FontAwesomeIcon icon={faShoppingBag} />
          {amountInCart > 0 && <p>{amountInCart}</p>}
          {amountInCart >= 100 && <p>{"++"}</p>}
        </Link>
      </div>
      <button
        className="sandwich-button"
        onClick={(e) => handleMenu(e)}
      ></button>
      <div className="sandwich">
        <div className="menu">
          <Link className="shop" to="/">
            Home
          </Link>
          <Link className="shop" to="/shop">
            Shop
          </Link>
          <Link className="about" to="/about">
            About
          </Link>
          <Link className="cart" to="/shopping-cart">
            <FontAwesomeIcon icon={faShoppingBag} />
            {amountInCart > 0 && <p>{amountInCart}</p>}
            {amountInCart >= 100 && <p>{"++"}</p>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
