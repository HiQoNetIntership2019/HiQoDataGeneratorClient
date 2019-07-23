import React from 'react';

import './style.css'

export default class ObjectInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {name, count} = this.props;
    let { changeObjectName, changeObjectsCount } = this.props;

    return (
      <div className="flex-wrap flex-row row object-info-container">
        <div className="input-group col-12 col-md-6">
          <div className="input-group-prepend">
            <span className="input-group-text input-label">Object Name</span>
          </div>
          <input type="text" className="object-input" value={name}
            onChange={e => changeObjectName(e.target.value)}/>
        </div>
        <div className=" input-group col-12 col-md-6">
          <div className="input-group-prepend">
            <span className="input-group-text input-label">Objects Count</span>
          </div>
          <input type="number" className="object-input" value={count}
            onChange={e => changeObjectsCount(e.target.value)}/>
        </div>
      </div>
    );
  }
}
