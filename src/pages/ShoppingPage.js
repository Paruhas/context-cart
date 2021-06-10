import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ShoppingPage.css";
import ProductList from "../components/ProductList";

function ShoppingPage() {
  const [products, setProducts] = useState([]);

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
      <ProductList
        key={item.id}
        productImg={item.productImg}
        productName={item.productName}
        productPrice={item.productPrice}
      />
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
