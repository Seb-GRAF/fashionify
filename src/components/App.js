import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import "../styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
