import './Menu.css'
import React from "react";
import Category from "./Category.js"
// import ItemCard from "../parts/ItemCard"
import ImagePart from '../components/ImagePart'
 
const Menu = props => {
    const {menu,image} = props
    let categories = []
    for (let i of menu){
        categories.push(i)
    }
    return (
        <div className='menu'>
            <h1 id='top' className='header'>Menu</h1>
            <ImagePart image={image} />
            {categories && categories.map((category,index)=>(
                <Category key={index} category={category} index={index} menu={menu} />
            ))} 
        </div>
        );
  };
export default Menu