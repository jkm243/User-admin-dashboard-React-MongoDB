import "../styles/dashboard.css"
import { Container, Row, Button, Table, Modal, Form } from 'react-bootstrap'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { useState } from "react";

function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            {/* <h1>Dashboard</h1> */}
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
            <Row>
                <Table striped bordered hover variant="dark" responsive className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td colSpan={2}><Button classname='m-2' variant="outline-primary" onClick={handleShow}><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default Dashboard;