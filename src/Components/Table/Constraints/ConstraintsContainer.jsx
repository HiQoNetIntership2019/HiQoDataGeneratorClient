import React from 'react';
import { connect } from 'react-redux';
import InputList from '../InputList/InputList.js';
import axios from 'axios';
import { setConstraints } from '../../../store/table/constraints/actions';

class ConstraintsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { constraints : [] };
    this.setConstraints = this.setConstraints.bind(this);
  }

  componentDidMount(){
    if (this.props.currentFieldTypes.get(this.props.id)){
      this.getConstraintsByFieldType(this.props.id);
    }
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
      this.setConstraints(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  setConstraints(constraints){
    let constraintsMap = constraints.map(item =>  { 
      item.isIncluded = false;
      return [item.id, item]; 
    });
    this.props.setConstraints(constraintsMap, this.props.id);
  }

  render() {
    let items = [];
    if (this.props.currentConstraints.get(this.props.id)){
      console.log(this.props.currentConstraints.get(this.props.id));
      items = Array.from(this.props.currentConstraints.get(this.props.id));
      items = items.reduce((result, item) => result.concat(item[1]), []);
    }

    return (
      <InputList 
        items={items}
      />
    );
  }
}

const mapDispatchToProps = {
  setConstraints
};

const mapStateToProps = state => {
  return {
    currentFieldTypes: state.fieldTypes.currentFieldTypes,
    currentConstraints: state.constraints.constraints,
    constraintsByFieldTypeAPI : state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_CONSTRAINTS_BY_FIELD_TYPE 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintsContainer);