import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.buttonName(this.props.name)
  }
  render() {
    const { calculation, wide } = this.props
    return (
      <div onClick={this.handleClick} className={calculation ? "calculating-color" : null || wide ? "wide" : null}>
        {this.props.name}
      </div>
    )
  }
}

export default Button;