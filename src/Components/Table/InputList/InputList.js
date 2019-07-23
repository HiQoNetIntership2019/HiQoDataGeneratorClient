import React from 'react';
import ListEntry from './ListEntry';

class InputList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let entries = this.props.items.map(item => <ListEntry key={item.id} id={this.props.id} label={item.name} changeValue={(value) => this.props.changeValue(item, value)} removeValue={() => this.props.removeValue(item)}/>)
    return (
      <div>
        {entries}
      </div>
    );
  }
}

export default InputList;