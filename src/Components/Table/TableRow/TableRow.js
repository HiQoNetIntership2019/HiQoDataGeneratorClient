import React from 'react';
import { connect } from 'react-redux';
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
    return (
        <tr key={this.props.id} className="d-flex">
            <td className="col-1">{this.props.index}</td>
            <td className="col-3"><Input/></td>
            <td className="col-2"><FieldTypesContainer id={this.props.id}/></td>
            <td className="col-1"><CheckBox/></td>
            <td className="col-3">
              {this.props.currentType != null &&
                <h2>
                  Here is {this.props.currentType}
                </h2>
              }
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
    currentType: state.fieldTypes.typeName
  }
};

export default connect(mapStateToProps)(TableRow);
