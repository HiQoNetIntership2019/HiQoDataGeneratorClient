import React from 'react';
import './style.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
          Filed Types
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item">Int</a>
          <a className="dropdown-item">Bool</a>
          <a className="dropdown-item">Float</a>
        </div>
      </div>
    );
  }
}

export default DropDown;