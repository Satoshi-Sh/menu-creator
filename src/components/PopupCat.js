import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//redux
import { useSelector, useDispatch } from "react-redux";
import { deleteCat, updateCat } from "../redux/menuSlice";

function PopupCat(props) {
  const dispatch = useDispatch();
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  const { index } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteCat({ index }));
    handleClose();
  };

  const handleSubmit = (e) => {
    // update menu
    const category = e.target.elements.category.value;
    const description = e.target.elements.description.value;

    dispatch(
      updateCat({
        index,
        category,
        description,
      })
    );
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow} className="editcat">
          Edit
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                defaultValue={menu[index].category}
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
                rows={3}
                defaultValue={menu[index].description}
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
            Delete the category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupCat;
