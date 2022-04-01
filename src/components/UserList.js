import React, { useEffect, useState } from "react"
import { Container, Row, Button, Table } from 'react-bootstrap'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

const UserList = () => {
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
        // notice array so no return here , ( ) instead of { } 
       // notice also map instead of forEach creates a closure - map is preferred
       <tr>
           <td>{user.id}</td> 
           <td>{user.name}</td>
           <td>{user.username}</td>
           <td>{user.email}</td>
           <td>{user.phone}</td>
           {/* onClick={''} */}
           <td colSpan={2}><Button className='m-2' variant="outline-primary" ><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
            </td>
       </tr>
    ))

    return (

        <Container>
            <Row>
                <Table striped bordered hover variant="dark" responsive className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {yourData}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default UserList;
