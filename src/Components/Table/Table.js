import React from 'react';
import TableRow from './TableRow/TableRow';
import './style.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows : [{id:1}],
      rowsCounter : 1
    } 
  }
  
  addRow(){
    var newRows = [...this.state.rows];
    newRows.push({id: this.state.rowsCounter+1});

    this.setState(state => ({
      rowsCounter: state.rowsCounter+1,
      rows: newRows
    }));
  }

  deleteRow(id){
    if (this.state.rows.length > 1){
      var newRows = [...this.state.rows].filter(el => el.id != id);
      this.setState(state => ({
        rows : newRows
      }));
    }
  }

  generateBody(){
    var rows = [];
    for (let i = 0; i < this.state.rows.length; i++){
      rows.push(
        <TableRow id={this.state.rows[i].id} index={i+1} onDelete={() => this.deleteRow(this.state.rows[i].id)}/>
      );
    }

    return rows;
  }

  render(){
    return (
      <div>
        <table className="table table-hover">
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
        <button type="button" onClick={() => this.addRow()} className="btn btn-success btn-lg btn-block addbtn">Add</button>
      </div>     
    );
  }
}

export default Table;
