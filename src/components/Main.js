import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
function Main(props) {
  const { menu, setMenu, image } = props;

  return (
    <>
      <Header />
      <Sidebar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} image={image} />
    </>
  );
}

export default Main;
