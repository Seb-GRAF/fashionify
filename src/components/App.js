import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import products from "../components/products/products";
import "../styles/App.scss";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import uniqid from "uniqid";

const App = () => {
  const [cart, setCart] = useState([]);
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("tshirts");
  const [searchValue, setSearchValue] = useState("");

  // ensure that page scrolls to top on tab change
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const handleAddToCart = (e) => {};

  return (
    <div className="main">
      <HashRouter basename="/">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                gender={gender}
                category={category}
                searchValue={searchValue}
                setGender={setGender}
                setCategory={setCategory}
                setSearchValue={setSearchValue}
              />
            }
          />
          <Route path="/about" element={<About />} />
          {products.map((e) => {
            return (
              <Route
                key={uniqid()}
                path={`/shop/${e.name.replace(/\s/g, "-")}`}
                element={<Product e={e} />}
              />
            );
          })}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
