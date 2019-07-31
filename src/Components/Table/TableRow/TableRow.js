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
    let fieldId = this.props.id;
    const currentDataset = this.props.currentDatasets.get(fieldId);
    
    return (
        <tr key={fieldId} className="d-flex">
            <td className="col-1">{this.props.index}</td>
            <td className="col-3">
              <Input 
                id = {'field-name-'+fieldId} 
                placeholder="Field Name" 
                onBlur = { value => this.props.modifyField(fieldId, value, data.isNotNull) }/>            
              <span id={"field-name-span-"+fieldId} className="invalid-text text-hidden">Valid symbols: [ a-z,A-Z,0-9,_ ]</span>
            </td>
            <td className="col-2"><FieldTypesContainer id={fieldId}/></td>
            <td className="col-1"><CheckBox checked={data.isNotNull} onChange={()=>this.props.modifyField(fieldId, data.name, !data.isNotNull)}/></td>
            <td className="col-2">
              <DatasetsContainer id={fieldId}/>
            </td>
            <td className="col-3">
              {currentDataset === undefined &&
                <ConstraintsContainer id={fieldId}/>
              }
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
    currentDatasets: state.datasets.currentDatasets,
    fields: state.fields.fieldsData
  }
};

const mapDispatchToProps = {
  modifyField
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);


