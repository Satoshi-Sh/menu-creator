import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'

import { Link } from "react-router-dom";

function OffCanvasExample({name,...props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    
    setShow(false)};
  const handleShow = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShow(true)};

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow} className="me-2">
        Cart
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Order</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



function Header(props) {
  const {restaurant} = props 
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
          <OffCanvasExample placement='end' name='end'/>

          </div>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Header;