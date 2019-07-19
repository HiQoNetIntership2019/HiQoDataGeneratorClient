import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../DropDown/DropDown';
import { setFieldType } from '../../../store/table/fieldtypes/actions';
import axios from 'axios';

class FieldTypesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: []
    }
  }

  render(){
    let currentType = this.props.currentType;
    return (
      <DropDown selectItem={item => this.props.setFieldType(item)}
        currentItem={currentType ? currentType.name : null}
        items={this.state.fields}
        defaultItem="Field types" />
    );
  }

  componentDidMount(){
    axios.get(this.props.allFieldsAPI)
    .then(response => {
      this.setState({ fields : response.data });
    })
    .catch(error  => {
      console.log(error);
    });
  }
}

const mapStateToProps = state => {
  return {
    currentType: state.fieldTypes.fieldType,
    allFieldsAPI: state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_ALL_TYPES
  }
};

const mapDispatchToProps = {
  setFieldType
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldTypesContainer);
