import "./Menu.css";
import React from "react";
import Category from "./Category.js";
import ImagePart from "./ImagePart";

//redux
import { useSelector } from "react-redux";

const Menu = () => {
  const data = useSelector((state) => {
    return state.menu;
  });
  const [menu, image] = [data.menu, data.image];
  const setMenu = () => {
    console.log("Hello for now");
  };
  let categories = [];
  for (let i of menu) {
    categories.push(i);
  }
  return (
    <div className="menu">
      <h1 id="top" className="header">
        Menu
      </h1>
      <ImagePart image={image} />
      {categories &&
        categories.map((category, index) => (
          <Category
            image={image}
            key={index}
            category={category}
            index={index}
            menu={menu}
            setMenu={setMenu}
          />
        ))}
    </div>
  );
};
export default Menu;
