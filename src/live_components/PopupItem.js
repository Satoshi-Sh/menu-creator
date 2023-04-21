import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import produce from "immer"
import './PopupItem.css'



function PopupItem(props) {
  const {index,index2,item,menu,setCart} = props 
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setItemOrder(empty)
    setShow(false)};
  const handleShow = () => setShow(true);
  
  // options object for radio and checkbox
  const gps=[]
  if(item.groups){
    for (let group of item.groups){
      if (group.required){
        gps.push({'radio':''})
      }
      else {
        let boxes = []
        for (let _ of group.options){
        boxes.push(false)
        }
        gps.push({check:boxes})
      }
    }
  }

  // default itemOrder
  const empty = {
    options:gps,
    request:'',
    optionNames:[],
    quantities:0,
    price: item.price,
    optionPrice:0,
  }
  const [itemOrder,setItemOrder] = useState(empty)


  const increment = (e)=>{
    e.preventDefault()
    setItemOrder((prev)=>{
      return {...prev,quantities:prev.quantities+1}
    })
  }
  const decrement = (e) =>{
    e.preventDefault()
    if (itemOrder.quantities==0) return;
    setItemOrder((prev)=>{
      return {...prev,quantities:prev.quantities-1}
    })

  }

  const saveRequest = (e)=>{
    setItemOrder(
      produce((draft)=>{
        draft['request']=e.target.value
      })
    )
  }

  // for total of options
  const calculate= (options) =>{
    let total = 0
    let names =[]
    options.map((option,index)=>{
      if ('radio' in option){
        let price = parseFloat(option.radio.split('$').at(-1))? parseFloat(option.radio.split('$').at(-1)):0
        total = total+price
        names.push(option['radio'])
      }
      else {
        const options = item.groups[index].options
        for (let i=0;i< option['check'].length;i++){
          if(option['check'][i]){ 
            total = total + options[i].price
            names.push(options[i].name)
          }

        }
      }
    })
    return [total,names]
  }

  const handleRadio= (e,index)=>{
    
    setItemOrder(
      produce((draft)=>{
        draft.options[index]['radio']=e.target.value
        let [sub,names] =calculate(draft.options)
        draft.optionPrice=sub
        draft.optionNames= names
      })
    )
  }
  const handleCheck = (e,index,index2)=>{
    setItemOrder(
      produce((draft)=>{
        draft.options[index]['check'][index2]= !draft.options[index]['check'][index2]
        let [sub,names] =calculate(draft.options)
        draft.optionPrice=sub
        draft.optionNames=names
      })
    )
    
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    setCart(
      produce((draft)=>{
      draft.push({...itemOrder, name:item.name})
      }
    ))
    setShow(false)
  }


  const Check = (props) =>{
    const {options,index,type} = props
    if (type==='radio'){
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
      key ={i}
      checked={`${option.name}${price}`===itemOrder.options[index]['radio']}
      onChange={(e)=>handleRadio(e,index)}
      required
      />

       )
    }
    )}
    </div>
    )}
    // for checkboxes
    else {
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
          key ={i}
          checked={itemOrder.options[index]['check'][i]}
          onChange={(e)=>handleCheck(e,index,i)}
          />
    
           )
        }
        )}
        </div>
        )}
    
      

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
               Add to Cart {`\$${((itemOrder.price+itemOrder.optionPrice)*itemOrder.quantities).toFixed(2)}`}
        </Button>
        </div>
        
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default PopupItem