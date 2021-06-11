import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../contexts/cartContext";

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

  const { cart, setCart } = useContext(CartContext);

  console.log(cart, "nav");

  const cartElements = cart.map((item, index) => {
    console.log(item);
    return (
      <div className="app-cart-items-inside-list" key={item.id}>
        <img src={item.img} alt="" />
        <div className="app-cart-items-inside-list-detail-grp">
          <div className="app-cart-items-inside-list-detail">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          <div className="app-cart-items-inside-list-detail">
            <span>x {item.count.amount}</span>
            <span>{item.count.totalPrice}</span>
          </div>
        </div>
      </div>
    );
  });

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
            <p onClick={openCartModal}>
              {cart.length > 9 ? "9+" : cart.length} Cart
            </p>
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
            {cartElements}
            <button onClick={closeCartModal}>CHECK OUT</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
