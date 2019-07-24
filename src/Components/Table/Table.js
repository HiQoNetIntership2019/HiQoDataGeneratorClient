import React from 'react';
import { connect } from 'react-redux';
import { addField, removeField } from '../../store/table/fields/actions';
import { removeFieldType } from '../../store/table/fieldtypes/actions';
import TableRow from './TableRow/TableRow';
import './style.css';


class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  addRow(){
    this.props.addField();
  }

  deleteRow(id){
    if (this.props.fields.size > 1){
      this.props.removeFieldType(id);
      this.props.removeField(id);
    }
  }

  generateBody(){
    let rows = [];
    let index = 1;
    this.props.fields.forEach(function(value, key) {
      rows.push(
        <TableRow key={key} data={value} id={key} index={index} onDelete={() => this.deleteRow(key)}/>
      );
      index++;
    },this);

    return rows;
  }


  render(){
    return (
      <div>
        <table className="table main-table table-hover">
          <thead>
            <tr className="d-flex">
              <th className="col-1">№</th>
              <th className="col-3">Name</th>
              <th className="col-2">Type</th>
              <th className="col-1">NotNull</th>
              <th className="col-3">Constraints</th>
              <th className="col-2">Datasets</th>
            </tr>
          </thead>
          <tbody>
            {this.generateBody()}
          </tbody>
        </table>
          <button type="button"
            onClick={() => this.addRow()}
            className="btn-block btn-success btn-lg">
            Add field
          </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fields: state.fields.fieldsData
  }
};

const mapDispatchToProps = {
  addField,
  removeField,
  removeFieldType
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
