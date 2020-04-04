import React from "react";
import "./Button.css";

export class Button extends React.Component {
  render() {
    return (<button className="Button" onClick={() => this.props.onClick(this.props.value)}>
      {this.props.icon}
    </button>);
  }
}
