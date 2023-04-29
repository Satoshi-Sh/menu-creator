import "./Live.css";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
//redux
import { useSelector } from "react-redux";

function Live() {
  const data = useSelector((state) => {
    return state.menu;
  });

  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Sidebar />
      <Menu cart={cart} setCart={setCart} />
    </>
  );
}

export default Live;
