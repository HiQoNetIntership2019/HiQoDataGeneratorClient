import React from 'react';
import './style.css';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
    );
  }
}

export default CheckBox;