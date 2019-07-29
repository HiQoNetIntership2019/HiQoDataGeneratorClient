import React from 'react';
import { connect } from 'react-redux';
import DropDown from 'Components/DropDown/DropDown';
import CustomDatasetContainer from './CustomDatasetContainer/CustomDatasetContainer'
import { removeDataset, setDataset } from 'store/table/datasets/actions';
import axios from 'axios';

class DatasetsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datasets: [{id: 0, name: "None"}] 
    }
  }

  addDataset(dataset){
    let newDatasets = [...this.state.datasets];
    newDatasets.push(dataset);
    this.setState({datasets: newDatasets});
  }

  render() {
    const currentDataset = this.props.currentDatasets.get(this.props.id);
    const currentType = this.props.currentFieldTypes.get(this.props.id);
    return (
      <div>
        <DropDown
          selectItem={item => { item.id == 0 ? this.props.removeDataset(this.props.id) : this.props.setDataset(item, this.props.id) }}
          currentItem={currentDataset ? currentDataset.name : null}
          items={this.state.datasets}
          defaultItem="None"
          />
          {currentType && (currentType.name.toLowerCase() === "string" || currentType.name.toLowerCase() === "enum") &&
            <CustomDatasetContainer onSave={(dataset) => this.addDataset(dataset)} id={this.props.id}/>
          }
      </div>
    );
  }

  componentWillReceiveProps(nextProps){
    let newType = nextProps.currentFieldTypes.get(this.props.id);
    let currentType = this.props.currentFieldTypes.get(this.props.id);

    if (newType && newType !== currentType){
      this.props.removeDataset(this.props.id);
      axios.get(nextProps.datasetForTypeAPI + newType.id)
        .then(response => this.setState({datasets: [{id: 0, name: "None"},...response.data]}))
        .catch((error)=>{
          console.log(error);
          this.setState({ datasets: [{id: 0, name: "None"}]})
        });
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

const mapDispatchToProps = { setDataset, removeDataset }

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsContainer);
