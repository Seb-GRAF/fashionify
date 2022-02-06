import React from "react";
import "../../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <div className="cta">
          <h1>Fashion straight to your doorstep </h1>
          <h3>Get yourself fashionified without leaving your home</h3>
          <a href="/shop">Shop Now</a>
        </div>
      </div>
      <div className="featured">
        <h1>Featured items</h1>
        <div className="cards">
          <div className="card">
            <img src="" alt="" />
            <p>item1</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <p>item2</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <p>item3</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <p>item4</p>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div className="top">
          <div className="left"></div>
          <div className="right">
            <h3>Even more than you expect</h3>
            <p>
              Fashion, Beauty, Designer and more. Where would you like to start?
              The best things are free, like our delivery!
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>
              Explore our collection of fashion and order with free delivery
            </p>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <div className="bottom-section"></div>
    </div>
  );
};

export default Home;
