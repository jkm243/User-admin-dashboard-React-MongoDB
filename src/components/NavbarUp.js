import "../styles/navbar.css"
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from "../assets/logo192.png"
import { Button, Modal, Form } from 'react-bootstrap'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useState } from "react";


function NavbarUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                autoFocus
              />
              <Form.Label className="mt-3">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
              />
              <Form.Label className="mt-3">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="JDoe21"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                History
              </Nav.Link>
              <Button classname='m-2 p-1' variant="primary" onClick={handleShow}><BsFillPlusCircleFill /></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarUp;