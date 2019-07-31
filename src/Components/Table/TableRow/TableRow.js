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
    this.state = {
      isInvalid: false
    }
  }

  render(){
    let data = this.props.data;
    const currentDataset = this.props.currentDatasets.get(this.props.id);
    
    return (
        <tr key={this.props.id} className="d-flex">
            <td className="col-1">{this.props.index}</td>
            <td className="col-3">
              <Input id = {'field-name-'+this.props.id} placeholder="Field Name" onBlur = {value => this.FieldNameCheck(value)}/>
              {this.state.isInvalid &&
                <span className="invalid-text">Valid symbols: [ a-z,A-Z,0-9,_ ]</span>
              }
            </td>
            <td className="col-2"><FieldTypesContainer id={this.props.id}/></td>
            <td className="col-1"><CheckBox checked={data.isNotNull} onChange={()=>this.props.modifyField(this.props.id, data.name, !data.isNotNull)}/></td>
            <td className="col-2">
              <DatasetsContainer id={this.props.id}/>
            </td>
            <td className="col-3">
              {currentDataset === undefined &&
                <ConstraintsContainer id={this.props.id}/>
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

  FieldNameCheck(value){
    let {data, id} = this.props;
    var regexp = new RegExp("^\\w{1,150}$");

    var field = document.getElementById('field-name-'+this.props.id);
     
    if(regexp.test(value))
    {
      this.props.modifyField(id, value, data.isNotNull);
      field.classList.remove("invalid");
      this.setState({isInvalid: false});
    }
    else{
      field.classList.add("invalid");
      this.setState({isInvalid: true});
    }
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


