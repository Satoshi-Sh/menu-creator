import Card from 'react-bootstrap/Card';
import './ItemCard.css'
import PopupItem from '../components/PopupItem'
import React,{useState,useRef} from 'react'
import PopupOption from '../components/PopupOption'
import Button from 'react-bootstrap/Button'
import produce from "immer"

function ItemCard(props) {
  const {item,menu,setMenu,index,index2}=props 
  const [show,setShow] = useState(false)
  const dragItem = useRef();
  const dragOverItem = useRef();


  const drop = (e) => {
    e.stopPropagation();
    setMenu(
      produce(draft=>{
        const dragItemContent = draft[index].items[index2].groups.splice(dragItem.current,1)[0]
        console.log(JSON.parse(JSON.stringify(dragItemContent)))
        draft[index].items[index2].groups.splice(dragOverItem.current,0,dragItemContent)
        dragItem.current= null;
        dragOverItem.current= null;
        
      })
    ) 
  };

  
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };


  const handleAdd = ()=>{
    const newGroup = {"required":true,"name":"New Group","options":[{"name":"New Option","price":0}]}
    setMenu(produce((draft)=>{
    let item_ = draft[index].items[index2] 
    if ('groups' in item_){
    item_.groups.push(newGroup)
    }
    else {
      item_['groups'] = [newGroup]
    }
  }))
  }  
  
  return (
    <Card className='shadow-sm card'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='text-muted p-2'>
            {item.description}
        </Card.Text>
        <Card.Text className='p-2 price'>
            $ {item.price.toFixed(2)}
        </Card.Text> 
        <Card.Text>
          Option Groups <Button variant='outline-info' onClick={handleAdd}>+ Add</Button>
        </Card.Text>
        <div className='option-groups'>{item.groups && item.groups.map((group,i)=>
          <div key={i} 
          draggable
          onDragStart={(e) => dragStart(e, i)}
          onDragEnter={(e) => dragEnter(e, i)}
          onDragEnd={drop}          
          ><PopupOption menu={menu} setMenu={setMenu} index={index} index2={index2} index3= {i} group={group}/></div>)}</div>
      </Card.Body>
      <Card.Footer>
      <PopupItem menu ={menu} item={item} setMenu={setMenu} index={index} index2={index2} show={show} setShow={setShow}/>
      </Card.Footer>
    </Card>
  );
}

export default ItemCard;