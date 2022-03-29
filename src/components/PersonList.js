import React from 'react';
import { Container, Row, Button, Table} from 'react-bootstrap'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';


export default class PersonList extends React.Component {
 state = {
    persons: []
  }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
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
              <tr>
              { this.state.persons.map(person => <td>{person.id}</td>)}
                { this.state.persons.map(person => <td>{person.name}</td>)}
                { this.state.persons.map(person => <td>{person.username}</td>)}
                { this.state.persons.map(person => <td>{person.email}</td>)}
                { this.state.persons.map(person => <td>{person.phone}</td>)}
                <td colSpan={2}><Button classname='m-2' variant="outline-primary" onClick={''}><BsPencil /></Button> <Button variant="danger"><BsFillTrashFill /></Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container> 
    )
  }
}