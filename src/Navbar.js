// Navbar.js
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { CiTimer } from "react-icons/ci";

import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="px-2">
      {isLoggedIn ? (
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">🛍️ Shop</Link>

            <Link className="px-3" to="/timer">
              Timer
            </Link>
          </div>
          <div className="flex justify-between items-center p-2">
            <Link className="px-3" to="/cart">
              🛒 Cart ({totalItems})
            </Link>
            <button className="p-2 bg-gray-400 text-white" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <>
          <button onClick={login}>login</button>
        </>
      )}
    </div>
  );
}

export default Navbar;
