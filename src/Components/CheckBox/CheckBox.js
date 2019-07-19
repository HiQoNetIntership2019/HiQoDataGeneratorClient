import React from 'react';
import './style.css';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="checkbox"/>
    );
  }
}

export default CheckBox;