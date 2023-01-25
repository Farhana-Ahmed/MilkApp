import React from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Checkout from "../Pages/Checkout";

const Navigation = () => {
  return (
    <>
      <NavBar handleSearch={function (e: React.MouseEvent<Element, MouseEvent>): void {
        throw new Error("Function not implemented.");
      } } />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>

    
  );
};

export default Navigation;
