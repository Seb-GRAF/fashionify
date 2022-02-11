import React, { useState, useEffect } from "react";
import products from "../products/products";
import { Link } from "react-router-dom";
import "../../styles/Shop.scss";
import uniqid from "uniqid";

const Categories = ({
  gender,
  category,
  handleSelectGender,
  handleSelectCategory,
  handleSearch,
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
        <button
          className="men active"
          onClick={() => handleSelectGender("men")}
        >
          Men
        </button>
        <button className="women" onClick={() => handleSelectGender("women")}>
          Women
        </button>
      </div>
      <div className="categories">
        <div className="button">
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
        <input
          type="text"
          className="search"
          onChange={handleSearch}
          placeholder={`Search in ${gender}`}
        />
      </div>
    </div>
  );
};

const Shop = ({
  gender,
  setGender,
  category,
  setCategory,
  searchValue,
  setSearchValue,
}) => {
  const handleSelectCategory = (selection) => {
    document.querySelector(".search").value = "";
    setSearchValue("");
    if (selection === "tshirts") setCategory("tshirts");
    if (selection === "shirts") setCategory("shirts");
    if (selection === "sweaters") setCategory("sweaters");
    if (selection === "jackets") setCategory("jackets");
  };

  const handleSelectGender = (selection) => {
    if (selection === "men") setGender("men");
    if (selection === "women") setGender("women");
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const Card = ({ e }) => {
    return (
      <li>
        <Link
          onClick={() => {
            setCategory(e.cat);
            setGender(e.gender);
          }}
          to={`/shop/${e.name.replace(/\s/g, "-")}`}
        >
          <div className="image-container">
            <img src={e.image} alt={e.name} />
          </div>
          <p className="name">{e.name}</p>
          <p className="price">{e.price} CHF</p>
        </Link>
      </li>
    );
  };

  return (
    <div className="shop">
      <Categories
        gender={gender}
        category={category}
        handleSelectGender={handleSelectGender}
        handleSelectCategory={handleSelectCategory}
        handleSearch={handleSearch}
      />
      <ul className="cards">
        {products.map((e) => {
          // gender selection
          if (e.gender !== gender) return;
          // search selection
          if (searchValue !== "") {
            if (e.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return <Card key={uniqid()} e={e} />;
            }
          } else if (e.cat === category) return <Card key={uniqid()} e={e} />;
        })}
      </ul>
    </div>
  );
};

export default Shop;
