import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// redux
import { useSelector, useDispatch } from "react-redux";
import { updateIt, deleteIt } from "../redux/menuSlice";

function PopupItem(props) {
  const dispatch = useDispatch();
  const menu = useSelector((state) => {
    return state.menu.menu;
  });

  const { index, index2 } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(
      deleteIt({
        index,
        index2,
      })
    );
    handleClose();
  };

  const handleSubmit = (e) => {
    // update menu
    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;
    const price = Number(e.target.elements.price.value);
    dispatch(
      updateIt({
        index,
        index2,
        name,
        description,
        price,
      })
    );

    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={menu[index].items[index2].name}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={4}
                defaultValue={menu[index].items[index2].description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price $</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                name="price"
                defaultValue={menu[index].items[index2].price}
                required
              />
            </Form.Group>
            <Button className="m-1" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="m-1" variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete the Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupItem;
