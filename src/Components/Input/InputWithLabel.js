import React from 'react';

class InputWithLabel extends React.Component {
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
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">{this.props.label}</span>
        </div>
        <input type="text" className="form-control" placeholder={this.props.placeholder} 
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

export default InputWithLabel;