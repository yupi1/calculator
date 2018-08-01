import React, { Component } from "react";

import Button from './Button';

class ButtonPanel extends Component {
  handleClick = name => {
    this.props.buttonName(name)
  }
  render() {
    return (
      <div className="button-panel">
        <Button buttonName={this.handleClick} name="clear" wide />
        <Button buttonName={this.handleClick} name="*" calculation />
        <Button buttonName={this.handleClick} name="/" calculation />

        <Button buttonName={this.handleClick} name="7" />
        <Button buttonName={this.handleClick} name="8" />
        <Button buttonName={this.handleClick} name="9" />
        <Button buttonName={this.handleClick} name="-" calculation />
        
        <Button buttonName={this.handleClick} name="4" />
        <Button buttonName={this.handleClick} name="5" />
        <Button buttonName={this.handleClick} name="6" />
        <Button buttonName={this.handleClick} name="+" calculation />

        <Button buttonName={this.handleClick} name="1" />
        <Button buttonName={this.handleClick} name="2" />
        <Button buttonName={this.handleClick} name="3" />
        <Button buttonName={this.handleClick} name="=" calculation />
      </div>
    )
  }
}

export default ButtonPanel;