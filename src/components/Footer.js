import React from "react";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="cta">
        <h2>Join the Fashionify Family</h2>
        <p>Get your weekly Fashionify newsletter straight to your mailbox.</p>
        <div className="form">
          <input type="text" id="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="fashionify">
        <h3>Fashionify</h3>
        <p>
          <Link to="/about">About Us</Link>
        </p>
        <p>FAQ</p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="links">
          <a href="mailto: seb.graf.sg@gmail.com">Email</a>
          <a href="http://github.com/seb-graf">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
