import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import './Header.css'
import Popup from './Popup'
import Sidebar from './Sidebar.js'
import Menu from './Menu.js'
import { Link } from "react-router-dom";



function Header(props) {
    const {menu,setMenu,image,setImage,restaurant,setRestaurant} = props
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const handleShow = () => setShow(true);


    function fileUpload(e){
        setText(e.target.innerText)
        handleShow()
    }
    function fileDownload(e){
        setText(e.target.innerText)
        handleShow()
    
    }
   return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href="#top">{restaurant}</Navbar.Brand>
          <div>
          <Button variant="outline-primary" onClick={fileUpload}>Upload</Button>{' '}
          <Button variant="outline-success" onClick={fileDownload}>Download</Button>{' '}
          <Link to='/livepage'><Button variant="outline-warning">Live Page</Button>{' '}</Link>
          </div>
        </Container>
        
      </Navbar>
      <Popup menu={menu} setMenu={setMenu} restaurant={restaurant} setRestaurant={setRestaurant} image={image} setImage={setImage} text={text} show={show} setShow = {setShow} />
    </>
  );
}

export default Header;