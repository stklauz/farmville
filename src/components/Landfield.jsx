import React, { Component } from 'react';
import './../css/Landfield.css';

import Field from './Field';

export default class Landfield extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      
    }

    this.renderRows = this.renderRows.bind(this);
    this.renderColumns = this.renderColumns.bind(this);
  }

  renderRows(columnNumber) {
    var rowsNum = 5;
    var list = [];

    for (var i = 0; i < rowsNum; i++) {
      var field = <Field {...this.props} key={ 'field' + columnNumber + String(i) } />;
      list.push(field);
    }
    
    return list;

  }

  renderColumns() {
    var columnsNum = 5;
    var list = [];

    for (var i = 0; i < columnsNum; i++){
      var row = <div key={'fieldRow' + i} className="Landfield-row">{this.renderRows(i)}</div>;
      list.push(row);
    }

    return list;

  }

  render() {
    return (
      <div className="Landfield">
        {this.renderColumns()}
      </div>      
    );
  }
}
