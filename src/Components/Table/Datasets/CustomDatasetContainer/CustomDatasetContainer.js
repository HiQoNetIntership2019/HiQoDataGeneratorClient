import React from 'react';
import { connect } from 'react-redux';
import { 
    addDatasetValue, 
    removeDatasetValue, 
    resetDatasetValues, 
    changeDatasetValue, 
    changeDatasetName 
} from 'store/table/datasets/customDatasets/actions';
import { setDataset } from 'store/table/datasets/actions';
import ModalWindow from 'Components/ModalWindow/ModalWindow';
import Input from 'Components/Input/Input';
import InputWithlabel from 'Components/Input/InputWithLabel';
import RoundButton from 'Components/RoundButton/RoundButton';
import axios from 'axios';
import './style.css';

class CustomDatasetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reset: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    addRow(){
        this.props.addDatasetValue();
    }
    
    deleteRow(index){
        if (this.props.datasetValues.length > 1){
            this.props.removeDatasetValue(index);
        }
    }

    updateName(value){
        this.props.changeDatasetName(value);
    }

    updateValue(index,value) {
        this.props.changeDatasetValue(index,value);
    }

    async saveDataset(dataset){
        try {
            const response = await axios.post(this.props.customDatasetAPI, dataset);
            this.props.setDataset({ id: response.data, name: dataset.name }, this.props.id);
            this.props.onSave(dataset);
            this.clearModalWindow();
            return true;
        }
        catch (error) {
            console.log(error);
            alert("Error occured!");
            return false;
        }
    }

    async onSubmit(){
        let result = false;
        let dataset = {
            name: this.props.datasetName,
            values: this.props.datasetValues.map(function(item){ return {value: item.value} })
        }
        return await this.saveDataset(dataset);
    }

    onClose(){
        this.clearModalWindow();
    }

    clearModalWindow(){
        this.props.resetDatasetValues();
        this.setState({reset: !this.state.reset});
    }

    generateBody(){
        let rows = [];      
        this.props.datasetValues.forEach(function(item,index) {
            rows.push(
                <tr key={item.id}>
                    <td>{index+1}</td>
                    <td><Input reset={this.state.reset} onBlur={(val)=>this.updateValue(index,val)}/></td>
                    <td>
                        <RoundButton onClick={() => this.deleteRow(index)}>
                            <i className="fa fa-times"/>
                        </RoundButton>
                    </td>
                </tr>
            );
        },this);    
        return rows;
    }

    render () {
        return (
            <div>               
                <button type="button" data-toggle="modal" data-target="#datasetModal" data-backdrop="static" data-keyboard="false" 
                    className="btn btn-success btn-block newBtn">New</button>
                <ModalWindow title="Add Custom Dataset" id="datasetModal" close={this.closeModalHandler}
                    onClose={this.onClose}
                    onSubmit={this.onSubmit}>
                    <InputWithlabel label="Dataset Name" reset={this.state.reset} onBlur={(value)=>this.updateName(value)}/>
                    <h3 className="text-center">Values</h3>
                    <table className="table modal-table">
                        <tbody>
                            {this.generateBody()}                                
                        </tbody>
                    </table>
                    <button type="button" onClick={() => this.addRow()} className="btn btn-success btn-block addbtn">Add</button>
                </ModalWindow>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentDatasets: state.datasets.currentDatasets,
        currentFieldTypes: state.fieldTypes.currentFieldTypes,
        datasetValues: state.customDataset.datasetValues,
        datasetName: state.customDataset.datasetName,
        customDatasetAPI: state.hostInfo.HOST_NAME +
            state.hostInfo.API_FOR_CUSTOM_DATASETS
    }
};
  
const mapDispatchToProps = {
    addDatasetValue,
    removeDatasetValue,
    resetDatasetValues,
    changeDatasetName,
    changeDatasetValue,
    setDataset,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CustomDatasetContainer);
  