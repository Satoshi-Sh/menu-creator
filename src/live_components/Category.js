import "./Category.css";
import React from "react";
import ItemCard from "./ItemCard.js";
//redux
import { useSelector } from "react-redux";

const Category = (props) => {
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  const { index, setCart } = props;

  return (
    <div id={menu[index].category} className="category">
      <h1 className="cat">{menu[index].category}</h1>
      <p className="cat-desc">
        {menu[index].description && menu[index].description}
      </p>
      {menu[index].items &&
        menu[index].items.map((item, index2) => (
          <div key={index2}>
            <ItemCard item={item} setCart={setCart} />
          </div>
        ))}
    </div>
  );
};
export default Category;
