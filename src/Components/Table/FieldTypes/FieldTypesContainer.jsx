import React from 'react';
import { connect } from 'react-redux';
import DropDown from 'Components/DropDown/DropDown';
import { setFieldType } from 'store/table/fieldtypes/actions';
import axios from 'axios';

class FieldTypesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: []
    }
  }

  render(){
    let fieldId = this.props.id;
    let currentFieldType = this.props.currentTypes.get(fieldId);
    return (
      <div>
        <DropDown 
          id={"field-type-"+fieldId}
          selectItem={item => this.props.setFieldType(item, fieldId)}
          currentItem={currentFieldType ? currentFieldType.name : null}
          items={this.state.fields}
          defaultItem="Field types" />
        <span id={"field-type-span-"+fieldId} className="invalid-text text-hidden">Cannot be empty</span>
      </div>
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
    currentTypes: state.fieldTypes.currentFieldTypes,
    allFieldsAPI: state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_ALL_TYPES
  }
};

const mapDispatchToProps = {
  setFieldType
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldTypesContainer);
