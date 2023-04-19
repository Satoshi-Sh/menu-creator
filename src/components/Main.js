import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Menu from './Menu'
function Main(props) {
  const {menu,setMenu, image,setImage,restaurant,setRestaurant} = props
  
  return (
    <>
     <Header menu={menu} setMenu={setMenu} restaurant={restaurant} setRestaurant={setRestaurant}
       image={image} setImage={setImage} />
     <Sidebar menu={menu} setMenu={setMenu}  />
     <Menu menu={menu} setMenu={setMenu} image={image}/>
     
    </>
    );
}

export default Main;