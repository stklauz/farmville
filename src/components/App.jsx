import React, { Component } from 'react';
import './../css/App.css';

import LandField from './Landfield';
import Sidebar from './Sidebar';

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      currentTool: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    var whatToChange = e.target.name;
    var changeTo = e.target.value;

    var stateCopy = this.state;
    stateCopy[whatToChange] = changeTo;
    this.setState({stateCopy});
  }

  render() {
    return (
      <div>
        <LandField />
        <Sidebar currentTool={this.state.currentTool}
                 handleChange={this.handleChange} />
      </div>      
    );
  }
}
