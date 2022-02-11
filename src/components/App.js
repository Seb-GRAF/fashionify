import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import products from "../components/products/products";
import "../styles/App.scss";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import uniqid from "uniqid";

const App = () => {
  const [cart, setCart] = useState([]);
  const [amountInCart, setAmountInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("tshirts");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let price = 0;
    cart.forEach((e) => (price += e.quantity * e.product.price));
    setTotalPrice(price);
  }, [amountInCart]);

  // ensure that page scrolls to top on tab change
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const handleAddToCart = (e, size) => {
    let isInCart = false;
    if (cart.length > 0)
      cart.forEach((item) => {
        if (item.product.name === e.name && item.size === size) {
          item.quantity += 1;
          setAmountInCart(amountInCart + 1);
          isInCart = true;
        }
      });
    if (!isInCart) {
      setCart([...cart, { product: e, size: size, quantity: 1 }]);
      setAmountInCart(amountInCart + 1);
    }
  };

  return (
    <div className="main">
      <HashRouter basename="/">
        <Header amountInCart={amountInCart} />
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
                element={<Product e={e} handleAddToCart={handleAddToCart} />}
              />
            );
          })}
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={cart}
                setCart={setCart}
                amountInCart={amountInCart}
                setAmountInCart={setAmountInCart}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            }
          />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
