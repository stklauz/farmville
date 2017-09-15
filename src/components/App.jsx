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
     this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <LandField currentTool={this.state.currentTool} />
        <Sidebar currentTool={this.state.currentTool}
                 handleChange={this.handleChange} />
      </div>      
    );
  }
}
