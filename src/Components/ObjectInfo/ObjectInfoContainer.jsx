import React from 'react';
import { connect } from 'react-redux';
import { changeObjectName, changeObjectsCount } from '../../store/object-info/actions';

import ObjectInfo from './ObjectInfo.jsx';

class ObjectInfoContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ObjectInfo
        name={this.props.objectName}
        count={this.props.objectsCount}
        changeObjectName={this.props.changeObjectName}
        changeObjectsCount={this.props.changeObjectsCount}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    objectName: state.objectInfo.name,
    objectsCount: state.objectInfo.count
  }
};


const mapDispatchToProps = {
  changeObjectName,
  changeObjectsCount
}


export default connect(mapStateToProps, mapDispatchToProps)(ObjectInfoContainer);
