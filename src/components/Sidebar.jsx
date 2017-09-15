import React, { Component } from 'react';
import './../css/Sidebar.css';

export default class Sidebar extends Component {


  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="Sidebar">
        <p>{this.props.currentTool || 'lol'}</p>
        <button name="currentTool" value="water" onClick={this.props.handleChange}>
          water
        </button>
        
      </div>      
    );
  }
}
