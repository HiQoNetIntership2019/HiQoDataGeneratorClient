import React from 'react';
import { connect } from 'react-redux';
import { addField, removeField } from 'store/table/fields/actions';
import { removeFieldType } from 'store/table/fieldtypes/actions';
import { removeDataset } from 'store/table/datasets/actions';
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
      this.props.removeDataset(id);
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
              <th className="col-2">Datasets</th>
              <th className="col-3">Constraints</th>
            </tr>
          </thead>
          <tbody>
            {this.generateBody()}
          </tbody>
        </table>
        <button type="button" onClick={() => this.addRow()} className="btn btn-success btn-lg btn-block addbtn">Add</button>
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
  removeFieldType,
  removeDataset
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
