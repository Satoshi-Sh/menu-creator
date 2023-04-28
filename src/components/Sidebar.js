import "./Sidebar.css";
import React, { useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addNewCat, switchCat } from "../redux/menuSlice";

const Sidebar = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dispatch = useDispatch();

  let categories = [];
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  for (let i of menu) {
    categories.push(i.category);
  }
  const setMenu = () => {
    console.log("Hello for now");
  };

  const [show, setShow] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setShow((prev) => !prev);
  }
  function handleAdd(e) {
    e.preventDefault();
    if (e.target.elements.category.value == "") return;

    dispatch(
      addNewCat({
        category: e.target.elements.category.value,
      })
    );

    // close the form
    handleClick(e);
  }

  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    dispatch(switchCat({ indexes: [dragItem.current, dragOverItem.current] }));
  };

  function FormOrButton() {
    if (show) {
      return (
        <Form className="mt-5" onSubmit={handleAdd}>
          <Form.Group className="mb-3" controlId="newCategory">
            <Form.Control
              type="text"
              name="category"
              placeholder="New category"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary mt-3" type="submit">
            Add
          </Button>
          <Button variant="danger m-3" onClick={handleClick}>
            Cancel
          </Button>
        </Form>
      );
    }
    return (
      <Button variant="info mt-5" onClick={handleClick}>
        +
      </Button>
    );
  }

  return (
    <>
      <Nav className="col-md-3 d-block bg-light sidebar">
        {categories &&
          categories.map((category, index) => (
            <Nav.Item key={index} className="m-2">
              <Nav.Link
                href={"#" + category}
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
              >
                {category}
              </Nav.Link>
            </Nav.Item>
          ))}

        <FormOrButton />
      </Nav>
    </>
  );
};
export default Sidebar;
