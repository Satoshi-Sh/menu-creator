import Card from "react-bootstrap/Card";
import "./ItemCard.css";
import PopupItem from "../components/PopupItem";
import React, { useState, useRef } from "react";
import PopupOption from "../components/PopupOption";
import Button from "react-bootstrap/Button";
import produce from "immer";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addNewGr, switchGr } from "../redux/menuSlice";

function ItemCard(props) {
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  const { setMenu, index, index2 } = props;
  const item = menu[index].items[index2];

  const [show, setShow] = useState(false);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dispatch = useDispatch();

  const drop = (e) => {
    e.stopPropagation();
    const [startidx, endidx] = [dragItem.current, dragOverItem.current];
    dispatch(
      switchGr({
        startidx,
        endidx,
        index,
        index2,
      })
    );
  };

  const dragStart = (e, position) => {
    e.stopPropagation();
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    e.stopPropagation();
    dragOverItem.current = position;
  };

  const handleAdd = () => {
    dispatch(
      addNewGr({
        index,
        index2,
      })
    );
  };

  return (
    <Card className="shadow-sm card">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-muted p-2">{item.description}</Card.Text>
        <Card.Text className="p-2 price">$ {item.price.toFixed(2)}</Card.Text>
        <Card.Text>
          Option Groups{" "}
          <Button variant="outline-info" onClick={handleAdd}>
            + Add
          </Button>
        </Card.Text>
        <div className="option-groups">
          {item.groups &&
            item.groups.map((group, i) => (
              <div
                key={i}
                draggable
                onDragStart={(e) => dragStart(e, i)}
                onDragEnter={(e) => dragEnter(e, i)}
                onDragEnd={drop}
              >
                <PopupOption
                  menu={menu}
                  setMenu={setMenu}
                  index={index}
                  index2={index2}
                  index3={i}
                  group={group}
                />
              </div>
            ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <PopupItem
          index={index}
          index2={index2}
          show={show}
          setShow={setShow}
        />
      </Card.Footer>
    </Card>
  );
}

export default ItemCard;
