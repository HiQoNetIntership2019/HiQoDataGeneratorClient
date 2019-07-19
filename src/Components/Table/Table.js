import React from 'react';
import Input from '../Input/Input';
import CheckBox from '../CheckBox/CheckBox';
import DropDown from '../DropDown/DropDown';
import './style.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (   
        <table className="table table-bordered table-hover">
        <thead>
            <tr>
            <th>№</th>
            <th>FieldName</th>
            <th>Type</th>
            <th>IsRequired</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td><Input/></td>
            <td><DropDown/></td>
            <td><CheckBox/></td>
            </tr>
        </tbody>
        </table>   
    );
  }
}

export default Table;