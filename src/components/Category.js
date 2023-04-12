import './Category.css'
import React,{useState,useRef} from "react";
import ItemCard from '../parts/ItemCard.js'
import Button from 'react-bootstrap/Button'; 
import produce from "immer"

const Category = props => {
    const {category,setMenu,menu,index} = props
    const [isEdit,setIsEdit] = useState(false)
    const dragItem = useRef();
    const dragOverItem = useRef();
    
    const dragStart = (e, position) => {
        dragItem.current = position;
        
      };
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
       
      };

      const drop = (e) => {
        const copyListItems = [...menu[index].items];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setMenu(produce((draft)=>{
            draft[index].items = copyListItems
        }))
      };
    

    const handleClick = (e) =>{
        setMenu(
             produce((draft)=>{
                 draft[index]['description'] = 'This is a test!!'
             })
        )
    }
    const CategoryForm = ()=>{

    }
    return (
        <div id={category} className='category'>
            <h1 className='cat'>{menu[index].category}</h1>
            <p className='cat-desc'>{menu[index].description && menu[index].description}</p>
            <Button variant="info m-3" onClick={handleClick}>
            Edit
            </Button>
            {menu[index].items && menu[index].items.map((item,index2)=>(
                <div key={index2}
                onDragStart={(e) => dragStart(e, index2)}
                onDragEnter={(e) => dragEnter(e, index2)}
                onDragEnd = {drop}
                draggable>
                   <ItemCard item={item} index={index} index2={index2} menu ={menu} setMenu={setMenu} />
                </div>
            ))}   

        </div>
        );
  };
export default Category