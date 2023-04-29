import Card from "react-bootstrap/Card";
import "./ItemCard.css";
import PopupItem from "./PopupItem";
import React from "react";
//redux
import { useSelector } from "react-redux";

function ItemCard(props) {
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  const { item, setCart } = props;
  return (
    <Card className="shadow-sm card">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-muted p-2">{item.description}</Card.Text>
        <Card.Text className="p-2 price">$ {item.price.toFixed(2)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <PopupItem item={item} setCart={setCart} />
      </Card.Footer>
    </Card>
  );
}

export default ItemCard;
