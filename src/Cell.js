import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  // constructor(props) {
  //   super(props);
  //   this.liveClass = this.liveClass.bind(this);
  // }
  
  liveClass() {
    return this.props.isAlive ? "live" : "dead";
  }
  
  render() {
    return (
      <span className={"cell " + this.liveClass()}>
        
      </span>
    )
  }
}

export default Cell;