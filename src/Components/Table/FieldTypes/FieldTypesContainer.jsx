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
    let currentFieldType = this.props.currentTypes.get(this.props.id);

    return (
      <DropDown selectItem={item => this.props.setFieldType(item, this.props.id)}
    	  currentItem={currentFieldType ? currentFieldType.name : null}
        items={this.state.fields}
        defaultItem="Field types" />
    );
  }

  componentDidMount(){
    axios.get(this.props.allFieldsAPI)
      .then(response => this.setState({fields: response.data}));
  }
}

const mapStateToProps = state => {
  return {
    currentTypes: state.fieldTypes.currentFieldTypes,
    allFieldsAPI: state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_ALL_TYPES
  }
};

const mapDispatchToProps = {
  setFieldType
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldTypesContainer);
