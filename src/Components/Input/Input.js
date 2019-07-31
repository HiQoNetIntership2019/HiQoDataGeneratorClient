import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt){
    this.setState({inputValue: evt.target.value})
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" id={this.props.id} className="form-control" placeholder={this.props.placeholder} 
          value={this.state.inputValue} 
          onChange={this.updateInputValue} 
          onBlur={()=> this.props.onBlur(this.state.inputValue)} 
        />
      </div>    
    );
  }

  componentWillReceiveProps(props){
    const { reset} = this.props;
    if (props.reset !== reset)
    {
      this.setState({inputValue:""})
    }
  }
}

export default Input;