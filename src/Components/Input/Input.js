import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Field Name"/>
      </div>    
    );
  }
}

export default Input;