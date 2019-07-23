import React from 'react';
import './style.css';

class ListEntry extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isIncluded : true, value: "" };
    this.onLabelClicked = this.onLabelClicked.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  onLabelClicked(){
    let isChecked = !this.state.isIncluded;
    this.setState({ isIncluded : isChecked });
    if (!isChecked){
      this.props.removeValue();
    }
    else{
      this.props.changeValue(this.state.value);
    }
  }

  onValueChanged(value){
    if (value != this.state.value)
    {
      this.setState({ value: value });
      this.props.changeValue(value);
    }
  }

  render(){
    return(
      <div>
        <div className="input-group mb-3 input-group-sm">
          <div className="input-group-prepend">
            {this.state.isIncluded ? (
              <span className="input-group-text" id="basic-addon3" onClick={this.onLabelClicked}>{this.props.label}</span>
            ) : (
              <span className="input-group-text excluded" id="basic-addon3" onClick={this.onLabelClicked}>{this.props.label}</span>
            )}
          </div>
          {this.state.isIncluded ? (
            <input type="text" className="form-control" id={`input-constraint-${this.props.id}`} onBlur={(event) => this.onValueChanged(event.target.value)}/>
          ) : (
            <input type="text" className="form-control" id={`input-constraint-${this.props.id}`} disabled/>
          )}
        </div>
      </div>
  )};
}

export default ListEntry;
