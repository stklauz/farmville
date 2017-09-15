import React, { Component } from 'react';

import './../css/Field.css';

export default class Field extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      water: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    var tool;
    switch (this.props.currentTool) {
      case 'water':
        tool = 'water';
        this.setState({'water': true});
        setTimeout(() => {this.setState({'water': false})}, 3000);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div onClick={this.handleChange} className={
                  'Field '+ (this.state.water ? 'water' : '')
                }>
        
      </div>      
    );
  }
}
