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


  const Check = (props) =>{
    const {options} = props
    return (
    <>
    {options && options.map((option,index)=> {
       return( 
      <div class="form-check mb-3">
        <input type="radio" class="form-check-input" id="validationFormCheck3" name={`radio${index}`} required></input>
        <label class="form-check-label" for="validationFormCheck">{option.name}</label>
        <div class="invalid-feedback">Example invalid feedback text</div>
      </div>

       )
    //   <div key={`default-checkbox`} className="mb-3">
    //       <Form.Check 
    //         type='checkbox'
    //         id={`default-checkbox`}
    //         label={option.name}
    //       />
    // </div>
  
    }
    )}
    </>
    )
  }

  const handleDelete = () => {
    // setMenu(
    //   produce((draft)=>{
    //     draft[index].items.splice(index2,1)
    //   })
    // )
    handleClose()
  }

  const handleSubmit =(e) =>{
    // update menu 
    // setMenu(
    //   produce((draft)=>{
    //   draft[index].items[index2].name= e.target.elements.name.value
    //   draft[index].items[index2].description = e.target.elements.description.value
    //   draft[index].items[index2].price = Number(e.target.elements.price.value)
    //   })
    // )

    e.preventDefault()
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
          <Modal.Title id='desc'>
          {item.description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {item.groups && item.groups.map((group,index)=>{
          return (
          <div key={index}>  
          <Modal.Header>{group.name}</Modal.Header>
          <Check options={group.options} />
          </div>
          )
          })}

          <Form onSubmit={handleSubmit}>
           
            <Form.Group
              className="m-3"
              controlId="exampleForm.ControlTextarea1"
            >
            <Form.Control name='request' as="textarea" rows={2} placeholder="Add special instructions for the restaurant."
              />
            </Form.Group>
        
          </Form>
        </Modal.Body>
        <div className='bottom-card'>
        <Button variant="outline-secondary" className='m-3'>
               Add 
        </Button>
        </div>
      </Modal>
    </>
  );
}

export default PopupItem