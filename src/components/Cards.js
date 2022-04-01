import React, { useEffect, useState } from 'react';
import { Card, Button, Container, CardGroup, Row, Col } from 'react-bootstrap'
import '../styles/cards.css';
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

    var yourData = users.map(user => (
        <Row xs={2} md={2} className="g-4 justify-content-center">
            <Col>
                <Card bg="dark" border="primary" className="card " style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img className="image" variant="top" src={''} />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            Username:{user.username}
                        </Card.Text>
                        <Card.Text>
                            Email:{user.email}
                        </Card.Text>
                        <Card.Text>
                            Phone:{user.phone}
                        </Card.Text>
                        <Button classname='m-2' variant="outline-primary" onClick={''}><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    ))


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnSelect = (item) => {
        // the item selected
        // console.log(item)
        return(
            <>
                <CardGroup>
                    <Row xs={2} md={2} className="g-4 justify-content-center">
                        <Col>
                            <Card bg="dark" border="primary" className="card " style={{ width: '18rem', margin: '1rem' }}>
                                <Card.Img className="image" variant="top" src={''} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Username: {item.username}
                                    </Card.Text>
                                    <Card.Text>
                                        Email: {item.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Phone: {item.phone}
                                    </Card.Text>
                                    <Button classname='m-2' variant="outline-primary" onClick={''}><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row >
                </CardGroup>
            </>
        )
    }


    const formatResult = (item) => {
        return (
            <>
                <CardGroup>
                    <Row xs={2} md={2} className="g-4 justify-content-center">
                        <Col>
                            <Card bg="dark" border="primary" className="card " style={{ width: '18rem', margin: '1rem' }}>
                                <Card.Img className="image" variant="top" src={''} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Username: {item.username}
                                    </Card.Text>
                                    <Card.Text>
                                        Email: {item.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Phone: {item.phone}
                                    </Card.Text>
                                    <Button classname='m-2' variant="outline-primary" onClick={''}><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row >
                </CardGroup>
            </>
        )
    }

    return (
        <Container className='head'>
            <Row>
                <ReactSearchAutocomplete
                    classname='search'
                    items={users}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    autoFocus
                    formatResult={formatResult}
                />
            </Row>
            {/* <CardGroup>
                {yourData}
            </CardGroup> */}
        </Container >
    );
}

export default Cards;