import "./Category.css";
import React, { useState, useRef } from "react";
import ItemCard from "../parts/ItemCard.js";
import Button from "react-bootstrap/Button";
import produce from "immer";
import PopupCat from "./PopupCat";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addNewIt, switchIt } from "../redux/menuSlice";

const Category = (props) => {
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  const { setMenu, index } = props;
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const [index1, index2] = [dragItem.current, dragOverItem.current];
    dispatch(
      switchIt({
        index1,
        index2,
        index,
      })
    );
  };

  const addNewItem = () => {
    dispatch(
      addNewIt({
        index,
      })
    );
  };

  return (
    <div id={menu[index].category} className="category">
      <h1 className="cat">{menu[index].category}</h1>
      <p className="cat-desc">
        {menu[index].description && menu[index].description}
      </p>
      <PopupCat
        menu={menu}
        setMenu={setMenu}
        index={index}
        show={show}
        setShow={setShow}
      />
      {menu[index].items &&
        menu[index].items.map((item, index2) => (
          <div
            key={index2}
            onDragStart={(e) => dragStart(e, index2)}
            onDragEnter={(e) => dragEnter(e, index2)}
            onDragEnd={drop}
            draggable
          >
            <ItemCard
              item={item}
              index={index}
              index2={index2}
              menu={menu}
              setMenu={setMenu}
            />
          </div>
        ))}

      <Button variant="outline-primary" onClick={addNewItem}>
        + New Item
      </Button>
    </div>
  );
};
export default Category;
