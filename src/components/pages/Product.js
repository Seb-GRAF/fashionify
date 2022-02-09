import React, { useState } from "react";
import "../../styles/Product.scss";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Link } from "react-router-dom";

const Product = ({ e, handleAddToCart }) => {
  return (
    <div className="product">
      <Link to="/shop" className="return">
        {"< Go back"}
      </Link>
      <div className="main">
        <div className="left">
          <div className="img">
            <InnerImageZoom src={e.image} zoomSrc={e.image} alt="{e.name}" />
          </div>
        </div>
        <div className="right">
          <h1>{e.name}</h1>
          <h3>
            CHF {e.price.toFixed(2)} <p>VAT included</p>
          </h3>
          <select id="">
            <option value="S">EU - Small</option>
            <option value="M">EU - Medium</option>
            <option value="L">EU - Large</option>
            <option value="XL">EU - XL</option>
          </select>
          <button onClick="handleAddToCart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
