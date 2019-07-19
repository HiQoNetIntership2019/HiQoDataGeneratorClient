import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className="text-center mt-4 mb-4">
        {this.props.children}
      </h1>
    );
  }
}

export default Header;