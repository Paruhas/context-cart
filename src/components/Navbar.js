import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Navbar() {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  const openCartModal = () => {
    setCartModalIsOpen(true);
  };

  const closeCartModal = () => {
    setCartModalIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="app-nav-wrap-menu">
          <div className="app-navigator-link">
            <Link to="/">HomePage</Link>
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
            <p onClick={openCartModal}>{"0"} Cart</p>
          </div>
        </div>
      </header>

      <Modal
        isOpen={cartModalIsOpen}
        onRequestClose={closeCartModal}
        style={customStyles}
        contentLabel="Cart Modal"
      >
        <div className="app-cart-items">
          <div className="app-cart-items-inside">
            <div className="app-cart-items-inside-list">
              <img src="http://placeimg.com/640/480/nightlife" alt="" />
              <div className="app-cart-items-inside-list-detail-grp">
                <div className="app-cart-items-inside-list-detail">
                  <span>ProductName</span>
                  <span>ProductPrice</span>
                </div>
                <div className="app-cart-items-inside-list-detail">
                  <span>x 1</span>
                  <span>100</span>
                </div>
              </div>
            </div>
            <button onClick={closeCartModal}>CHECK OUT</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
