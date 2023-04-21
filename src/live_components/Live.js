import './Live.css';
import React, {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Menu from './Menu'
function Live(props) {
  const {menu,image,restaurant} = props
  const {order,setOrder} = useState({})
  
  return (
    <>
     <Header restaurant={restaurant} order={order}/>
     <Sidebar menu={menu}  />
     <Menu menu={menu} image={image}/>
     
    </>
    );
}

export default Live;