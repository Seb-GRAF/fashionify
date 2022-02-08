import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import "../styles/App.scss";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";

const App = () => {
  // ensure that page scrolls to top on tab change
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="main">
      <HashRouter basename="/">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
