import './Live.css';
import React, {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Menu from './Menu'
function Live(props) {
  const {menu,json} = props
  
  return (
    <>
     <Header />
     <Sidebar menu={menu} />
     <Menu menu={menu} image={json['image']}/>
     
    </>
    );
}

export default Live;