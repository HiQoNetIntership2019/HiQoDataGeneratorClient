import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { apiForConstraints } from 'constants/ConstantsForConstraintTypes';
import './style.css';
import axios from 'axios';
import { setOptions, changeConstraintValue, removeConstraint } from 'store/table/constraints/actions';
import { connect } from 'react-redux';

class ListEntryContainer extends React.Component{
  constructor(props) {
    super(props);
    this.onEntryClicked = this.onEntryClicked.bind(this);
    this.changeConstraintValue = this.changeConstraintValue.bind(this);
    this.removeConstraint = this.removeConstraint.bind(this);
  }

  componentDidMount(){
    if (this.props.inputType == "select" && !this.props.constraintOptions.get(this.props.optionsCategory)){
      axios.get(apiForConstraints.get(this.props.optionsCategory))
      .then(response => {
        this.props.setOptions(this.props.optionsCategory, response.data)
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  changeConstraintValue(value){
    let constraint = this.props.constraint;
    if(this.props.inputType == "number"){
      value = parseInt(value);
    }

    constraint.value = value;
    constraint.isIncluded = true;    
    this.props.changeConstraintValue(constraint, this.props.id);
  }

  removeConstraint(){
    this.props.removeConstraint(this.props.constraint.id, this.props.id);
  }

  onEntryClicked(){
    let isChecked = !this.props.isIncluded;
    if (!isChecked){
      this.removeConstraint();
    }
    else{
      this.changeConstraintValue();
    }
  }

  render(){
    if (this.props.inputType == "select"){
      let constraintOptions = [];
      if (this.props.constraintOptions){
        constraintOptions = this.props.constraintOptions.get(this.props.optionsCategory);
      }
      return(
        <div>
          <SelectInput
            id={this.props.id}
            label={this.props.constraint.name}
            onSelect={this.changeConstraintValue}
            isIncluded={this.props.isIncluded}
            onLabelClicked={this.onEntryClicked}
            options={constraintOptions}/>          
        </div>
    )}
    else {
      return(
        <div>
          <TextInput
            id={this.props.id}
            label={this.props.constraint.name}
            onBlur={this.changeConstraintValue}
            isIncluded={this.props.isIncluded}
            onLabelClicked={this.onEntryClicked}
            inputType={this.props.inputType}/>          
        </div>
    )}
  };
}

const mapDispatchToProps = {
  setOptions,
  changeConstraintValue,
  removeConstraint
};

const mapStateToProps = state => {
  return {
    constraintOptions: state.constraints.options, 
    currentConstraints: state.constraints.constraints,
    constraintsByFieldTypeAPI : state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_CONSTRAINTS_BY_FIELD_TYPE 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListEntryContainer);
