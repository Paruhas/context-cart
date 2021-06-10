import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="app-content-homePage">
        <h1>WELCOME</h1>
        <br />
        <h1>THIS IS HOMEPAGE</h1>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
