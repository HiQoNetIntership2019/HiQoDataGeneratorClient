import React from 'react';
import './style.css';

export default function TextInput(props) {
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
        <input type={props.inputType} className="form-control" id={`input-constraint-${props.id}`} onBlur={(event) => props.onBlur(event.target.value)}/>
      ):(
        <input type={props.inputType} className="form-control" id={`input-constraint-${props.id}`} disabled/>
      )}
    </div>
  );
}