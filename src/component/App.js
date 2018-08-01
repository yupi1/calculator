import React, { Component } from "react";
import "./App.css";
import calculation from './calculation';

import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {
    next: '',
    operation: '',
    total: '',
  }
  handleClick = buttonName => {
    this.setState(calculation(this.state, buttonName))
  }
  render() {
    const { total, next } = this.state;
    return (
      <div className="component-app">
        <div className="component-display">
          {next.length !== 0 ? next : total.length !== 0 ? total : '0'} 
        </div>

        <ButtonPanel buttonName={this.handleClick}/>
      </div>
    );
  }
}

export default App;
