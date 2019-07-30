import React from 'react';
import './style.css';

export default function SelectInput(props) {
    let options = [];
    if (props.isIncluded && props.options){
        options = props.options.map((item) => <option key={item.id} value={item.value || item.name }>{item.name || item.value}</option>);
    }
    return (
      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          {props.isIncluded ? (
                <span className="input-group-text" id="basic-addon3" onClick={props.onLabelClicked}>{props.label}</span>
            ):(
                <span className="input-group-text excluded" id="basic-addon3" onClick={props.onLabelClicked}>{props.label}</span>
          )}
        </div>
        {props.isIncluded ? (
            <select className="custom-select form-control" id={`inputGroupSelect${props.id}`} defaultValue="" onChange={(event) => props.onSelect(event.target.value)}>
                <option value="">Choose...</option>
                {options}
            </select>
        ):(
            <select className="custom-select form-control" id={`inputGroupSelect${props.id}`} defaultValue="" disabled>
                <option value="">Choose...</option>
            </select>
        )}  
      </div>
    );
}