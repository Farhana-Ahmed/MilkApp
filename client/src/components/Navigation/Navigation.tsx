import React from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Checkout from "../Pages/Checkout";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
};

export default Navigation;
