import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import "./Header.css";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const handleShow = () => setShow(true);

  const data = useSelector((state) => {
    return state.menu;
  });

  function fileUpload(e) {
    setText(e.target.innerText);
    handleShow();
  }
  function fileDownload(e) {
    setText(e.target.innerText);
    handleShow();
  }
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#top">{data.restaurant}</Navbar.Brand>
          <div>
            <Button variant="outline-primary" onClick={fileUpload}>
              Upload
            </Button>{" "}
            <Button variant="outline-success" onClick={fileDownload}>
              Download
            </Button>{" "}
            <Link to="/livepage">
              <Button variant="outline-warning">Live Page</Button>{" "}
            </Link>
          </div>
        </Container>
      </Navbar>
      <Popup text={text} show={show} setShow={setShow} />
    </>
  );
}

export default Header;
