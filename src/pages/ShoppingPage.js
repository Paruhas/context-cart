import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ShoppingPage() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const resData = await fetch(
        "https://60bafd1e42e1d000176202e4.mockapi.io/learn-react/products"
      );
      // console.log(resData);
      const resDataJSON = await resData.json();
      // console.log(resDataJSON);
      setProducts(resDataJSON);
    } catch (error) {
      console.log(error);
    }
  };

  const productList = products.map((item, index) => {
    return (
      <>
        <div key={item.id} className="shopping-item">
          <img src={item.productImg} />
          <div>{item.productName}</div>
          <div>Price: {item.productPrice}฿</div>
          <div className="shopping-counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button>ADD TO CART</button>
        </div>
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="app-content">
        <h1>THIS IS ShoppingPage</h1>
        <br />
        <div className="shopping-grid">{productList}</div>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingPage;
