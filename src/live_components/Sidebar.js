import "./Sidebar.css";
import React from "react";
import { Nav } from "react-bootstrap";
//redux
import { useSelector } from "react-redux";

const Sidebar = () => {
  const menu = useSelector((state) => {
    return state.menu.menu;
  });
  let categories = [];
  for (let i of menu) {
    categories.push(i.category);
  }

  return (
    <>
      <Nav className="col-md-3 d-block bg-light sidebar">
        {categories &&
          categories.map((category, index) => (
            <Nav.Item key={index} className="m-2">
              <Nav.Link href={"#" + category}>{category}</Nav.Link>
            </Nav.Item>
          ))}
      </Nav>
    </>
  );
};
export default Sidebar;
