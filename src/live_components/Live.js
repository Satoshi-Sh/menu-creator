import './Live.css';
import React, {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Menu from './Menu'
function Live(props) {
  const {menu,image,restaurant} = props
  const [cart,setCart] = useState([])
  
  return (
    <>
     <Header restaurant={restaurant} cart={cart} setCart={setCart}/>
     <Sidebar menu={menu}  />
     <Menu menu={menu} image={image} cart={cart} setCart={setCart}/>
     
    </>
    );
}

export default Live;