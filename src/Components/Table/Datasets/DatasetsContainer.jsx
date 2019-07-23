import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../DropDown/DropDown';
import { setDataset } from '../../../store/table/datasets/actions';

import axios from 'axios';

class DatasetsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { constraints: [] }
  }

  render() {
    let currentDataset = this.props.currentDataset.get(this.props.id);

    return (
      <DropDown
        selectedItem={item => this.props.setDataset(item, this.props.id)}
        currentItem={currentDataset ? currentDataset : null}
        items={this.state.constraints}
        defaultItem="Datasets"
        />
    );
  }


  componentWillReceiveProps(nextProps){
  if (nextProps.currentType){
    axios.get(nextProps.datasetForTypeAPI + nextProps.currentType.id)
      .then(response => this.setState({constraints: response.data}))
    }
  }
}


const mapStateToProps = state => {
  return {
    currentFieldTypes: state.fieldTypes.currentFieldTypes,
    currentDataset: state.datasets.currents,
    datasetForTypeAPI: state.hostInfo.HOST_NAME +
      state.hostInfo.API_FOR_DATASET_DEPENDING_ON_FIELD_TYPE
  }
}

const mapDispatchToProps = { setDataset }

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsContainer);
