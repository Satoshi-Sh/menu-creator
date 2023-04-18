import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import './Header.css'

import { Link } from "react-router-dom";

import sushiya from '../menus/sushiya.json'

// sample menu 
const loadedData = JSON.stringify(sushiya)
const json = JSON.parse(loadedData)


function Header(props) {
   return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href="#top">Sushiya</Navbar.Brand>
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