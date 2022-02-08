import React from "react";
import products from "../products/products";
import "../../styles/Shop.scss";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <ul className="cards">
        {products.map((e) => {
          console.log(e);
          return (
            <li key={e.name}>
              <div className="image-container">
                <img src={e.image} alt={e.name} />
                <button className="add-to-cart">Add to cart</button>
              </div>
              <p className="name">{e.name}</p>
              <p className="price">{e.price} CHF</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shop;
