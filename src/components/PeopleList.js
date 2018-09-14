import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import '../styles/App.css';


export default class PeopleList extends React.Component {
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
    <div>
    
    <ListGroup className = "list">
          { this.state.persons.map(person => <ListGroupItem bsStyle="info">{person.name}</ListGroupItem>)}
    </ListGroup>
      
      </div>
    )
  }
}