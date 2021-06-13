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

  const increaseItem = (inProduct) => {
    // console.log(inProduct);
    try {
      const newCart = [...cart];
      // console.log(newCart);

      newCart.map((cartItem) => {
        // console.log(cartItem.id === item.productId);
        if (cartItem.id === inProduct.id) {
          cartItem.count.amount = cartItem.count.amount + 1;
          cartItem.count.totalPrice =
            cartItem.count.totalPrice + inProduct.price * 1;
        }
        return cartItem;
      });

      setCart([...newCart]);

      // // ถ้าเก่า ทำให้ตำแหน่งมันไม่เหมือนเดิม
      // const findProductInCart = cart.findIndex((cartItem, index) => {
      //   // console.log(cartItem.id, item.productId);
      //   return cartItem.id === inProduct.id;
      // });
      // console.log(findProductInCart);

      // const newCart = cart.filter((filItem, filIndex) => {
      //   return filItem.id !== inProduct.id;
      // });
      // setCart([
      //   ...newCart,
      //   (cart[findProductInCart] = {
      //     id: inProduct.id,
      //     name: inProduct.name,
      //     price: inProduct.price,
      //     img: inProduct.img,
      //     count: {
      //       amount: cart[findProductInCart].count.amount + 1,
      //       totalPrice:
      //         cart[findProductInCart].count.totalPrice + inProduct.price * 1,
      //     },
      //   }),
      // ]);
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseItem = (deProduct) => {
    // console.log(deProduct);
    try {
      let newCart = [...cart];
      // console.log(newCart);

      if (deProduct.count.amount === 1) {
        newCart = newCart.filter((cartItem) => {
          return cartItem.id !== deProduct.id;
        });
      } else {
        newCart.map((cartItem) => {
          // console.log(cartItem.id === item.productId);
          if (cartItem.id === deProduct.id) {
            cartItem.count.amount = cartItem.count.amount - 1;
            cartItem.count.totalPrice =
              cartItem.count.totalPrice - deProduct.price * 1;
          }
          return cartItem;
        });
      }

      setCart([...newCart]);

      // // ถ้าเก่า ทำให้ตำแหน่งมันไม่เหมือนเดิม
      // const findProductInCart = cart.findIndex((cartItem, index) => {
      //   // console.log(cartItem.id, item.productId);
      //   return cartItem.id === deProduct.id;
      // });
      // console.log(findProductInCart);

      // const newCart = cart.filter((filItem, filIndex) => {
      //   return filItem.id !== deProduct.id;
      // });

      // if (cart[findProductInCart].count.amount === 1) {
      //   setCart([...newCart]);
      // } else {
      //   setCart([
      //     ...newCart,
      //     (cart[findProductInCart] = {
      //       id: deProduct.id,
      //       name: deProduct.name,
      //       price: deProduct.price,
      //       img: deProduct.img,
      //       count: {
      //         amount: cart[findProductInCart].count.amount - 1,
      //         totalPrice:
      //           cart[findProductInCart].count.totalPrice - deProduct.price * 1,
      //       },
      //     }),
      //   ]);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const checkoutButtonElements =
    cart.length === 0 ? null : (
      <button onClick={closeCartModal}>CHECK OUT</button>
    );

  const cartElements =
    cart.length === 0 ? (
      <div className="app-cart-items-inside-list">
        <div>NO ITEM IN CART</div>
      </div>
    ) : (
      cart.map((item, index) => {
        // console.log(item);
        return (
          <div className="app-cart-items-inside-list" key={item.id}>
            <img src={item.img} alt="" />
            <div className="app-cart-items-inside-list-detail-grp">
              <div className="app-cart-items-inside-list-detail">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <div className="app-cart-items-inside-list-detail">
                <span>
                  <button
                    style={{ padding: "3px" }}
                    onClick={() => increaseItem(item)}
                  >
                    +
                  </button>{" "}
                  {item.count.amount}{" "}
                  <button
                    style={{ padding: "3px" }}
                    onClick={() => decreaseItem(item)}
                  >
                    -
                  </button>
                </span>
                <span>{item.count.totalPrice}</span>
              </div>
            </div>
          </div>
        );
      })
    );

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
        ariaHideApp={false}
        contentLabel="Cart Modal"
      >
        <div className="app-cart-items">
          <div className="app-cart-items-inside">
            {cartElements}
            {checkoutButtonElements}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
