import "./Menu.css";
import React from "react";
import Category from "./Category.js";
// import ItemCard from "../parts/ItemCard"
import ImagePart from "../components/ImagePart";

//redux
import { useSelector } from "react-redux";

const Menu = (props) => {
  const data = useSelector((state) => {
    return state.menu;
  });

  const [menu, image] = [data.menu, data.image];
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
          <Category key={index} index={index} />
        ))}
    </div>
  );
};
export default Menu;
