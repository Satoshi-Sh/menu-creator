import './Sidebar.css'
import React,{useRef,useState} from "react";
import {Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import produce from "immer";


const Sidebar = props => {
    const {menu} = props
    let categories = []
    for (let i of menu){
        categories.push(i.category)
    }   

    return (
        <>
            
            <Nav className="col-md-3 d-block bg-light sidebar">
            {categories &&  categories.map((category,index)=>(
                <Nav.Item key={index} className='m-2'>
                <Nav.Link href={'#'+category}
                >{category}</Nav.Link>
                </Nav.Item>

            ))
            
            }

            </Nav>
            
        </>
        );
  };
export default Sidebar