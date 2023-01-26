import React from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Checkout from "../Pages/Checkout";
import ProductsList from "../ProductsList/ProductsList";
import ProductDetails from "../ProductDetals/ProductDetails";
import { ProductItem } from "../types/IProduct";
// import Checkout from "../Pages/Checkout";
interface Props {
  product: ProductItem,
  // handleAdd : (product: ProductItem) => void;
}

const Navigation = () => {
  return (
    <>
      <NavBar  />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/milk" element={<ProductsList />}></Route>
        
        <Route path="/milk/:id" element={<ProductDetails />}></Route>

        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>

    
  );
};

export default Navigation;
