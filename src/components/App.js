import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import {Button} from 'react-bootstrap';


import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React API practice</h1>
        </header>
        <Button bsStyle="info"><Link to='/peopleList' className = "link" >People List</Link></Button>
      </div>
      

    );
  }
}

export default App;
