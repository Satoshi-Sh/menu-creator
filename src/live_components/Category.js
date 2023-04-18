import './Category.css'
import React,{useState,useRef} from "react";
import ItemCard from './ItemCard.js'



const Category = props => {
    const {menu,index} = props

    return (
        <div id={menu[index].category} className='category'>
          
            <h1 className='cat'>{menu[index].category}</h1>
            <p className='cat-desc'>{menu[index].description && menu[index].description}</p>
            {menu[index].items && menu[index].items.map((item,index2)=>(
                <div key={index2}>
                   <ItemCard item={item} index={index} index2={index2} menu ={menu} />
                </div>
            ))}   
            
        </div>
        );
  };
export default Category