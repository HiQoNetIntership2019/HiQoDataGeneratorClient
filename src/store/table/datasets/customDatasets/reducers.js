import { 
    ADD_DATASET_VALUE, 
    REMOVE_DATASET_VALUE, 
    CHANGE_DATASET_NAME, 
    CHANGE_DATASET_VALUE,
    RESET_DATASET
} from './actions';

const defaultState = { 
    datasetName:"",
    datasetValues: [{id:1,value:""}, {id:2, value:""}, {id:3, value:""}],
    valuesIdCounter: 4
}

export const customDatasetReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_DATASET_VALUE:{
            let newValues = [...state.datasetValues];
            newValues.push({id: state.valuesIdCounter, value: ""});
            return {
                ...state,
                datasetValues: newValues,
                valuesIdCounter: state.valuesIdCounter+1
            }
        }
        case REMOVE_DATASET_VALUE:{
            let newValues = [...state.datasetValues];
            newValues.splice(action.payload.valueIndex,1);
            return {
                ...state,
                datasetValues: newValues
            }  
        }
        case CHANGE_DATASET_NAME:
            return {
                ...state,
                datasetName: action.payload.name
            }  
        case CHANGE_DATASET_VALUE:{
            let newValues = [...state.datasetValues];
            newValues[action.payload.valueIndex].value = action.payload.value;
            return {
                ...state,
                datasetValues: newValues
            }
        }
        case RESET_DATASET:
            return {
                ...state,
                datasetValues: [{id:1,value:""}, {id:2, value:""}, {id:3, value:""}],
                datasetName: "",
                valuesIdCounter: 4
            }
        default:
            return state;
  }
}
