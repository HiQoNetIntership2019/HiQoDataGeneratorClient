import React from 'react';
import ListEntryContainer from './ListEntryContainer';
import { inputTypes } from 'constants/ConstantsForConstraintTypes';

class InputList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let entries = this.props.items.map(item => 
      <ListEntryContainer 
        key={item.id} 
        id={this.props.id+"-"+item.id} 
        constraint = {item}
        removeValue={() => this.props.removeValue(item)} 
        isIncluded={item.isIncluded}
        inputType={inputTypes.get(item.name)}
        optionsCategory={item.name}/>
    );
    return (
      <div>
        {entries}
      </div>
    );
  }
}

export default InputList;