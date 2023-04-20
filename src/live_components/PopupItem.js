import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import produce from "immer"
import './PopupItem.css'



function PopupItem(props) {
  const {index,index2,item,menu} = props 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // default itemOrder
  const empty = {
    options:[],
    request:'',
    quantities:0,
    price: item.price
  }
  const [itemOrder,setItemOrder] = useState(empty)
  const [quantities,setQuantities] = useState(0)


  const Check = (props) =>{
    const {options,index,type} = props
    return (
    <div key={index} className='mt-3'>
    {options && options.map((option,i)=> {
      let price = option.price==0? '': ` - Add \$${option.price.toFixed(2)}`
       return( 
      <Form.Check
      value = {`${option.name}${price}`}
      label={`${option.name}${price}`}
      type={type}
      name={`group${index}`}
      id={`${type}-${i}`}
      key ={i}/>

       )
 
  
    }
    )}
    </div>
    )
  }
  const increment = ()=>{
    setItemOrder((prev)=>{
      return {...prev,quantities:prev.quantities+1}
    })
  }
  const decrement = () =>{
    if (itemOrder.quantities==0) return;
    setItemOrder((prev)=>{
      return {...prev,quantities:prev.quantities-1}
    })

  }

  const saveRequest = (e)=>{
   console.log(e.target.value)
  }



  const handleSubmit =(e) =>{
    const elements = e.target.elements
    for (let element of elements){
      if (element.checked){
      console.log(element)}
    }
    const request = elements.request.value
    e.preventDefault()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='p-4'>
          <Modal.Title >{item.name}</Modal.Title>
          <Modal.Title id='desc'>
          {item.description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-5'>
          <Form onSubmit={handleSubmit}>
          {item.groups && item.groups.map((group,index)=>{
          const type = group.required? 'radio':'checkbox';
          const isRequired = group.required? ' (Required)' : ' (Optional)';
          return (
          <div key={index}>  
          <Modal.Header>{group.name}{isRequired}</Modal.Header>
          <Check type={type} index= {index} options={group.options} />
          </div>
          )
          })}           
            <Form.Group
              className="m-5"
              controlId="exampleForm.ControlTextarea1"
            >
            <Form.Control name='request' as="textarea" rows={3} placeholder="Add special instructions for the restaurant."
              onBlur={saveRequest} defaultValue={itemOrder.request}/>
            
            </Form.Group>
            <div className='quantities'>
              <div className='buttons'>
                  <button onClick={decrement}>-</button>
                  <div>{itemOrder.quantities}</div>
                  <button onClick={increment}>+</button>
              </div>
            </div>
            <div className='bottom-card'>
            <Button variant="outline-secondary" className='m-3' type='submit'>
               Add to Cart {`\$${(itemOrder.price*itemOrder.quantities).toFixed(2)}`}
        </Button>
        </div>
        
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default PopupItem