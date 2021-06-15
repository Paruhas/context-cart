import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";

function ProductList(props) {
  const [count, setCount] = useState(1);

  const { cart, setCart } = useContext(CartContext);

  // console.log(cart, "product");

  const handlerAddToCart = (event, item, q) => {
    try {
      // console.log(item);
      // console.log(q);

      const findProductInCart = cart.findIndex((cartItem, index) => {
        // console.log(cartItem.id, item.productId);
        return cartItem.id === item.productId;
      });
      // console.log(findProductInCart);

      if (findProductInCart === -1) {
        setCart((prev) => [
          ...prev,
          {
            id: item.productId,
            name: item.productName,
            price: item.productPrice,
            img: item.productImg,
            count: {
              amount: q,
              totalPrice: item.productPrice * q,
            },
          },
        ]);
      } else {
        // console.log(cart[findProductInCart]);

        const newCart = [...cart];
        // console.log(newCart);

        newCart.map((cartItem) => {
          // console.log(cartItem.id === item.productId);
          if (cartItem.id === item.productId) {
            cartItem.count.amount = cartItem.count.amount + q;
            cartItem.count.totalPrice =
              cartItem.count.totalPrice + item.productPrice * q;
          }
          return cartItem;
        });

        setCart([...newCart]);

        // // ถ้าเก่า ทำให้ตำแหน่งมันไม่เหมือนเดิม
        // const newCart = cart.filter((filItem, filIndex) => {
        //   return filItem.id !== item.productId;
        // });
        // setCart([
        //   ...newCart,
        //   (cart[findProductInCart] = {
        //     id: item.productId,
        //     name: item.productName,
        //     price: item.productPrice,
        //     img: item.productImg,
        //     count: {
        //       amount: cart[findProductInCart].count.amount + q,
        //       totalPrice:
        //         cart[findProductInCart].count.totalPrice +
        //         item.productPrice * q,
        //     },
        //   }),
        // ]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cart);

  return (
    <div className="shopping-item">
      <img src={props.productImg} alt="" />
      <div>{props.productName}</div>
      <div>Price: {props.productPrice}฿</div>
      <div className="shopping-counter">
        <button
          onClick={() => (count === 1 ? setCount(1) : setCount(count - 1))}
        >
          -
        </button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={(event) => handlerAddToCart(event, props, count)}>
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductList;
