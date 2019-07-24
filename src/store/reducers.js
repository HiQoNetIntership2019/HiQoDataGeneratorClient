import { combineReducers } from 'redux';

import { fieldTypesReducer } from './table/fieldtypes/reducers';

import { datasetsReducer } from './table/datasets/reducers';

import { customDatasetReducer } from './table/datasets/customDatasets/reducers';

import { objectInfoReducer } from './object-info/reducers';

import { fieldsReducer } from './table/fields/reducers';

import { constraintsReducer } from './table/constraints/reducers';

import {
  HOST_NAME,
  API_FOR_ALL_TYPES,
  API_FOR_DATASET_DEPENDING_ON_FIELD_TYPE,
  API_FOR_ALL_CONSTRAINTS,
  API_FOR_CONSTRAINTS_BY_FIELD_TYPE
  API_FOR_CUSTOM_DATASETS
} from '../constants/ConstantsForAPI';

const defaultHostInfoReducer = {
  HOST_NAME,
  API_FOR_ALL_TYPES,
  API_FOR_DATASET_DEPENDING_ON_FIELD_TYPE,
  API_FOR_ALL_CONSTRAINTS,
  API_FOR_CONSTRAINTS_BY_FIELD_TYPE
  API_FOR_CUSTOM_DATASETS
}

const hostInfoReducer = (state = defaultHostInfoReducer, action) => {
    return state;
};


export default combineReducers({
    fieldTypes: fieldTypesReducer,
    hostInfo: hostInfoReducer,
    datasets: datasetsReducer,
    customDataset: customDatasetReducer,
    objectInfo: objectInfoReducer,
    fields: fieldsReducer,
    constraints : constraintsReducer
});
