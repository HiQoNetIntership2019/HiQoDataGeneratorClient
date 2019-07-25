import React from 'react';
import './style.css';

class RoundButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" onClick={this.props.onClick} className="btn btn-danger btn-circle btn-mid">{this.props.children}</button>
    )
  };
}

export default RoundButton;
