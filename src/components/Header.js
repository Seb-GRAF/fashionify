import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="left">
        <a href="/">
          <h1>Fashionify</h1>
        </a>
      </div>
      <div className="right">
        <a className="shop" href="/shop">
          Shop
        </a>
        <a className="about" href="/about">
          About
        </a>
      </div>
    </header>
  );
};

export default Header;
