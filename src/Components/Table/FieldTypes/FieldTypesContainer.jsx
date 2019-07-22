import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../DropDown/DropDown';
import { setFieldType } from '../../../store/table/fieldtypes/actions';

class FieldTypesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: []
    }
  }

  render(){
    console.log(this.props.id);
    console.log(this.props.currentTypes);
    return (
      <DropDown selectItem={item => this.props.setFieldType(item.name,this.props.id)}
        currentItem={this.props.currentTypes.get(this.props.id)}
        items={this.state.fields}
        defaultItem="Field types" />
    );
  }

  componentDidMount(){
    fetch(this.props.allFieldsAPI)
      .then(response => response.json())
      .then(data => this.setState({fields: data}));
  }
}

const mapStateToProps = state => {
  return {
    currentTypes: state.fieldTypes.typeNames,
    allFieldsAPI: state.hostInfo.HOST_NAME + state.hostInfo.API_FOR_ALL_TYPES
  }
};

const mapDispatchToProps = {
  setFieldType
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldTypesContainer);
