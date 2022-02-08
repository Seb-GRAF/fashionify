import React, { useState, useEffect } from "react";
import products from "../products/products";
import "../../styles/Shop.scss";
import uniqid from "uniqid";

const Categories = ({
  gender,
  category,
  handleSelectGender,
  handleSelectCategory,
}) => {
  useEffect(() => {
    if (gender === "men") {
      document.querySelector(".men").classList.add("active");
      document.querySelector(".women").classList.remove("active");
    }
    if (gender === "women") {
      document.querySelector(".women").classList.add("active");
      document.querySelector(".men").classList.remove("active");
    }
  }, [gender]);

  useEffect(() => {
    document.querySelectorAll(".category-button").forEach((e) => {
      e.classList.remove("active");
    });
    document.querySelector(`.${category}`).classList.add("active");
  }, [category]);
  return (
    <div className="top">
      <div className="gender-section">
        <button className="women" onClick={() => handleSelectGender("women")}>
          Women
        </button>
        <button
          className="men active"
          onClick={() => handleSelectGender("men")}
        >
          Men
        </button>
      </div>
      <div className="categories">
        <button
          className="category-button tshirts"
          onClick={() => handleSelectCategory("tshirts")}
        >
          {gender == "men" ? "T-Shirts & Polos" : "T-Shirts and Tops"}
        </button>
        <button
          className="category-button shirts"
          onClick={() => handleSelectCategory("shirts")}
        >
          {gender == "men" ? "Shirts" : "Dresses"}
        </button>
        <button
          className="category-button sweaters"
          onClick={() => handleSelectCategory("sweaters")}
        >
          Sweaters
        </button>
        <button
          className="category-button jackets"
          onClick={() => handleSelectCategory("jackets")}
        >
          Jackets
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const [gender, setGender] = useState("women");
  const [category, setCategory] = useState("tshirts");

  const handleSelectCategory = (selection) => {
    if (selection === "tshirts") setCategory("tshirts");
    if (selection === "shirts") setCategory("shirts");
    if (selection === "sweaters") setCategory("sweaters");
    if (selection === "jackets") setCategory("jackets");
  };

  const handleSelectGender = (selection) => {
    if (selection === "men") setGender("men");
    if (selection === "women") setGender("women");
  };
  return (
    <div className="shop">
      <Categories
        gender={gender}
        category={category}
        handleSelectGender={handleSelectGender}
        handleSelectCategory={handleSelectCategory}
      />
      <ul className="cards">
        {products.map((e) => {
          if (e.gender !== gender) return;
          if (e.cat !== category) return;
          return (
            <li key={uniqid()}>
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
