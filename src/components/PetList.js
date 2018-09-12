import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

class PetList extends Component {
    constructor(props){
        super(props);
        this.state = {
            breeds : []
        };
    }

     /*componentWillMount(){
        axios({
            method:'get',
            url:'https://dog.ceo/api/breeds/list/all',
        })
    .then(function(response) {
        console.log(response);
        const breeds = response.data;
        this.setState({ breeds });
    
    })
    .catch(function (error) {
        console.log(error);
    });
    }*/
    
    componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
        const breeds = res.data;
        this.setState({ breeds });
      })
  }
  
    render() {
    return (
        
        <div></div>
        
    );
  }
}

export default PetList;