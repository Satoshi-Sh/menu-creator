import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
function Main(props) {
  const { menu, setMenu, image } = props;

  return (
    <>
      <Header />
      <Sidebar />
      <Menu />
    </>
  );
}

export default Main;
