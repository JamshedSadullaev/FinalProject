import React from "react";
//import ProductList from "../components/ProductList";

//******ERROR ProductList does not yet exist
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
