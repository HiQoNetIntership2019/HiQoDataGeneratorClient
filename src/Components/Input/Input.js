import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.value
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt){
    this.setState({inputValue: evt.target.value})
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder={this.props.placeholder} 
          value={this.state.inputValue} 
          onChange={this.updateInputValue} 
          onBlur={()=> this.props.onBlur(this.state.inputValue)}
        />
      </div>    
    );
  }
}

export default Input;