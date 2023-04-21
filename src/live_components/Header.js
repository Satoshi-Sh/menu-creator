import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'
import produce from "immer"

import { Link } from "react-router-dom";


function OffCanvasExample(props) {
  const {cart,setCart} = props
  const [show, setShow] = useState(false);


  let total = 0;
  cart.map((item)=>{
    total = total + (item.price+item.optionPrice)*item.quantities
  })

  const complete = () =>{
    setCart([])
    setShow(false)
  }
  const increment =(e,index) =>{
    setCart(produce((draft)=>{
    draft[index]['quantities'] = draft[index]['quantities'] +1
    })
    )
  }
  const decrement = (e,index)=>{
    setCart(produce((draft)=>{
      if (draft[index]['quantities'] ===1)
      {  
        draft.splice(index,1)
      }
      else {
        draft[index]['quantities'] = draft[index]['quantities'] -1
      }
    }
    ))
  }

  const handleClose = () => {
    
    setShow(false)};
  const handleShow = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShow(true)};
    let numbers = 0;
    for (let item of cart){
      numbers = numbers +item.quantities
    }
    const PlaceOrder= ()=>{
      if (total>0){
        return(
          <>
          <hr></hr>
          <h2 className='mt-4'>Subtotal ${total.toFixed(2)}</h2>
            <h2>Total ${(total*1.1).toFixed(2)}</h2>
          <Button className='mt-3' variant='outline-secondary' onClick={complete}>Place Order</Button>
            <p className='mt-3'>*This deletes items in the cart.</p> 
          </>
        )
      }
      else {
        return <p>Your cart is empty...</p>
      }
    }

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow} className="me-2">
        Cart  ({numbers} items)
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Order ({numbers} items)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          {cart&&cart.map((item,index)=>{
            return(
              <div key={index} className='section'>
              <h3>{item.name} x  {item.quantities}</h3>
              <ul>
              {item.optionNames&& item.optionNames.map((optionName,i)=>{
                return <li key={i}>{optionName}</li>
              })}
              {item.request&&<li>Special Request: {item.request}</li>}
              </ul>
              <h4>${((item.price+item.optionPrice)*item.quantities).toFixed(2)}</h4>
              <div className='quantities'>
              <div className='buttons'>
                  <button onClick={(e)=>decrement(e,index)}>-</button>
                  <button onClick={(e)=>increment(e,index)}>+</button>
              </div>
            </div>
              </div>
              )
          })}
          <PlaceOrder />
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



function Header(props) {
  const {restaurant,cart,setCart} = props 
  return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href="#top">{restaurant}</Navbar.Brand>
          <div>
          <Link to='/'>
          <Button variant="outline-primary">
              Menu Creator
          </Button>{' '}
          </Link>
          <OffCanvasExample cart={cart} setCart={setCart}/>
          

          </div>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Header;