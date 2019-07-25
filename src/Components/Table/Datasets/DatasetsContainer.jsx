import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../DropDown/DropDown';
import CustomDatasetContainer from './CustomDatasetContainer/CustomDatasetContainer'
import { setDataset } from '../../../store/table/datasets/actions';
import axios from 'axios';

class DatasetsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { datasets: [] }
  }

  render() {
    let currentDataset = this.props.currentDatasets.get(this.props.id);

    return (
      <div>
        <DropDown
          selectedItem={item => this.props.setDataset(item, this.props.id)}
          currentItem={currentDataset ? currentDataset : null}
          items={this.state.datasets}
          defaultItem="Datasets"
          />
          <CustomDatasetContainer id={this.props.id}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps){
    let currentType = nextProps.currentFieldTypes.get(this.props.id)
    if (currentType){
      axios.get(nextProps.datasetForTypeAPI + currentType.id)
        .then(response => this.setState({constraints: response.data}));
      }
    }
  }


const mapStateToProps = state => {
  return {
    currentFieldTypes: state.fieldTypes.currentFieldTypes,
    currentDatasets: state.datasets.currentDatasets,
    datasetForTypeAPI: state.hostInfo.HOST_NAME +
      state.hostInfo.API_FOR_DATASET_DEPENDING_ON_FIELD_TYPE
  }
}

const mapDispatchToProps = { setDataset }

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsContainer);
