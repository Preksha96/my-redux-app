import React from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Navbar from "./Navbar";
import PLP from "./pages/PLP";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/plp" element={<PLP />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
