import React from "react";
//import ProductList from "../components/ProductList
///*****error component ProductList does not exist!!! 
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      {/* <ProductList /> */}
      <Cart />
    </div>
  );
};

export default Home;
