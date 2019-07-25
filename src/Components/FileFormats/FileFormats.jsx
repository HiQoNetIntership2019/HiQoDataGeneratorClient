import React from 'react';
import { connect } from 'react-redux';

import RadioButtonsGroup from 'Components/RadioButtonsGroup/RadioButtonsGroup.jsx';
import { setFileFormat } from 'store/file-formats/actions';

import { ALL_FILE_FORMATS } from './config';

class FileFormats extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <RadioButtonsGroup
      items={ALL_FILE_FORMATS}
      collectionName="fileFormats"
      selectItem={item => this.props.setFileFormat(item)}
      current={this.props.current}
      />
  }
}


const mapStateToProps = state => {
  return {
    current: state.fileFormats
  }
}

const mapDispatchToProps = {
  setFileFormat
}


export default connect(mapStateToProps, mapDispatchToProps)(FileFormats);
