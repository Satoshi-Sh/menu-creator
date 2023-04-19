import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import './Header.css'

import { Link } from "react-router-dom";



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

          </div>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Header;