import React from 'react';
import { connect } from 'react-redux';
import { modifyField } from 'store/table/fields/actions';
import Input from 'Components/Input/Input';
import CheckBox from 'Components/CheckBox/CheckBox';
import FieldTypesContainer from 'Components/Table/FieldTypes/FieldTypesContainer.jsx';
import DatasetsContainer from 'Components/Table/Datasets/DatasetsContainer.jsx';
import ConstraintsContainer from 'Components/Table/Constraints/ConstraintsContainer.jsx';
import RoundButton from 'Components/RoundButton/RoundButton';
import './style.css';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data;
    return (
        <tr key={this.props.id} className="d-flex">
            <td className="col-1">{this.props.index}</td>
            <td className="col-3"><Input placeholder="Field Name" onBlur={(value)=>this.props.modifyField(this.props.id, value, data.isNotNull)}/></td>
            <td className="col-2"><FieldTypesContainer id={this.props.id}/></td>
            <td className="col-1"><CheckBox checked={data.isNotNull} onChange={()=>this.props.modifyField(this.props.id, data.name, !data.isNotNull)}/></td>
            <td className="col-3">
              <ConstraintsContainer id={this.props.id}/>
            </td>
            <td className="col-2">
              <DatasetsContainer id={this.props.id}/>
            </td>
            <td>
              <RoundButton onClick={this.props.onDelete}>
                <i className="fa fa-times" aria-hidden="true"/>
              </RoundButton>
            </td>
        </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTypes: state.fieldTypes.typeNames,
    fields: state.fields.fieldsData
  }
};

const mapDispatchToProps = {
  modifyField
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
