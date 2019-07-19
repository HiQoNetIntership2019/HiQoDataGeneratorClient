import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../DropDown/DropDown';
import axios from 'axios';
import { setConstraintType } from '../../../store/table/constraints/actions';
import { setFieldType } from '../../../store/table/fieldtypes/actions';

class ConstraintsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { constraints : [] };
  }

  componentDidMount()
  {
    this.getAllConstraints()
  }

  componentDidUpdate(prevProps){
    if (prevProps.fieldTypeId != this.props.fieldTypeId)
    {
      this.getConstraintsByFieldType(this.props.fieldTypeId);
    }
  }

  getAllConstraints(){
    axios.get(this.props.allConstraintsAPI)
    .then(response => {
      this.setState({ constraints : response.data });
    })
    .catch(error  => {
      console.log(error);
    });
  }

  getConstraintsByFieldType(id){
    axios.get(`${this.props.constraintsByFieldTypeAPI}${id}`)
    .then(response => {
      this.setState({ constraints : response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }
 
  render() {
    let dropDownName = "Constraint types";
    return (
      <DropDown 
        selectItem={item => this.props.setConstraintType(item) }
        currentItem={this.props.currentConstraint}
        items={this.state.constraints}
        defaultItem="Constraints"
      />
    );
  }
}

const mapDispatchToProps = {
  setConstraintType
};

const mapStateToProps = state => {
  return {
    fieldTypeId: state.fieldTypes.fieldType == null ? null : state.fieldTypes.fieldType.id,
    currentConstraint: state.constraintTypes.constraintTypes == null ? null : state.constraintTypes.constraintTypes.name,
    allConstraintsAPI: state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_ALL_CONSTRAINTS,
    constraintsByFieldTypeAPI : state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_CONSTRAINTS_BY_FIELD_TYPE,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintsContainer);