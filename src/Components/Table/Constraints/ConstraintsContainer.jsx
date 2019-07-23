import React from 'react';
import { connect } from 'react-redux';
import InputList from '../InputList/InputList.js';
import axios from 'axios';
import { setConstraints, changeConstraintValue, removeConstraint } from '../../../store/table/constraints/actions';

class ConstraintsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { constraints : [] };
    this.changeConstraintValue = this.changeConstraintValue.bind(this);
    this.removeConstraint = this.removeConstraint.bind(this);
  }

  componentDidUpdate(prevProps){
    let fieldId = this.props.id;
    if (!this.props.currentFieldTypes.get(fieldId)) return;
    let fieldTypeId = this.props.currentFieldTypes.get(fieldId).id;
    if (prevProps.currentFieldTypes.get(fieldId) == undefined || 
      prevProps.currentFieldTypes.get(fieldId).id != fieldTypeId)
    {
      this.getConstraintsByFieldType(fieldTypeId);
    }
  }

  getConstraintsByFieldType(id){
    axios.get(`${this.props.constraintsByFieldTypeAPI}${id}`)
    .then(response => {
      this.setState({ constraints : response.data });
      let constraintsMap = this.state.constraints.map(elem =>  { return [elem.id, elem] });
      this.props.setConstraints(constraintsMap, this.props.id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  changeConstraintValue(constraint, value, fieldId){
    constraint.value = value;
    this.props.changeConstraintValue(constraint, fieldId);
  }

  removeConstraint(constraint, fieldId){
    this.props.removeConstraint(constraint.id, fieldId);
  }
 
  render() {
    console.log(this.props.currentConstraints);
    return (
      <InputList 
        changeValue={(item, value) => this.changeConstraintValue(item, value, this.props.id)}
        removeValue = {(item) => this.removeConstraint(item, this.props.id)}
        items={this.state.constraints}
      />
    );
  }
}

const mapDispatchToProps = {
  setConstraints,
  changeConstraintValue,
  removeConstraint
};

const mapStateToProps = state => {
  return {
    currentFieldTypes: state.fieldTypes.currentFieldTypes,
    currentConstraints: state.constraints.constraints,
    constraintsByFieldTypeAPI : state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_CONSTRAINTS_BY_FIELD_TYPE,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintsContainer);