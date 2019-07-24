import React from 'react';
import { connect } from 'react-redux';
import { modifyField } from '../../../store/table/fields/actions';
import Input from '../../Input/Input';
import CheckBox from '../../CheckBox/CheckBox';
import FieldTypesContainer from '../FieldTypes/FieldTypesContainer.jsx';
import DatasetsContainer from '../Datasets/DatasetsContainer.jsx';
import RoundButton from '../../RoundButton/RoundBotton';
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
