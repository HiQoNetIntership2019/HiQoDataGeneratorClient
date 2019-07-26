import React from 'react';


export default class RadioButtonsGroup extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { items, collectionName, selectItem, current:{name} } = this.props;

    let radioButtons = items.map(item => (
      <div className="form-check-inline" key={item.id}
        onClick={e => selectItem ? selectItem(item) : null}>
        <label className="form-check-label">
          <input type="radio" className="form-check-input"
          name={collectionName ? collectionName : "default"}
          checked={item.name===name } readOnly/>
          {item.name}
        </label>
      </div>
    ));

    return (
      <div className="radio-buttons-group">
        {radioButtons}
      </div>
    );
  }
}
