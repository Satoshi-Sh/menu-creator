import Card from 'react-bootstrap/Card';
import './ItemCard.css'
import PopupItem from './PopupItem'
import React,{useState,useRef} from 'react'
import PopupOption from '../components/PopupOption'
import Button from 'react-bootstrap/Button'
import produce from "immer"

function ItemCard(props) {
  const {item,menu,index,index2,setCart}=props 
  return (
    <Card className='shadow-sm card'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='text-muted p-2'>
            {item.description}
        </Card.Text>
        <Card.Text className='p-2 price'>
            $ {item.price.toFixed(2)}
        </Card.Text> 
      </Card.Body>
      <Card.Footer>
      <PopupItem menu ={menu} item={item} index={index} index2={index2} setCart={setCart}/>
      </Card.Footer> 
    </Card>
  );
}

export default ItemCard;