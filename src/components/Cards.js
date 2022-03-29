import React, { useEffect, useState } from 'react';
import { Card, Button, Container, CardGroup,Row,Col,Form } from 'react-bootstrap'
import '../styles/cards.css';
import logo from "../assets/logo192.png"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

const Cards = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const yourData = users.map(user => (
        <Row xs={2} md={2} className="g-4 justify-content-center">    
                <Col>
                    <Card bg="dark" border="primary" className="card " style={{ width: '18rem' ,margin:'1rem' }}>
                        <Card.Img className="image" variant="top" src={''} />
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                Username: {user.username}
                            </Card.Text>
                            <Card.Text>
                                Email: {user.email}
                            </Card.Text>
                            <Card.Text>
                                Phone: {user.phone}
                            </Card.Text>
                            <Button classname='m-2' variant="outline-primary" onClick={''}><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
                        </Card.Body>
                    </Card>
                </Col>   
        </Row >
    ))
    return (
        <Container classname='head me-2'>
            <ReactSearchAutocomplete
            classname='search'
            // items={items}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            // formatResult={formatResult}
          />
            <CardGroup>
                {yourData}
            </CardGroup>
        </Container >
    );
}

export default Cards;