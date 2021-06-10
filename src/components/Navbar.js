import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="app-nav-wrap-menu">
        <div className="app-navigator-link">
          <Link>HomePage</Link>
          {"|"}
          <Link to="/ShoppingPage">ShoppingPage</Link>
          {"|"}
          <Link to="/Page002">Page002</Link>
        </div>
        <div className="app-nav-user">User</div>
      </div>
      <div className="app-nav-wrap">
        <div className="app-logo">
          <p>AddCartApp</p>
        </div>
        <div className="app-search">
          <input
            className="app-search-input"
            type="text"
            placeholder="SEARCH HERE!"
          />
        </div>
        <div className="app-cart-logo">
          <p>{"0"} Cart</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
