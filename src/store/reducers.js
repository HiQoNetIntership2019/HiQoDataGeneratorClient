import { combineReducers } from 'redux';

import { fieldTypesReducer } from './table/fieldtypes/reducers';
import { datasetsReducer } from './table/datasets/reducers';

import { customDatasetReducer } from './table/datasets/customDatasets/reducers';

import { objectInfoReducer } from './object-info/reducers';
import { fieldsReducer } from './table/fields/reducers';
import { constraintsReducer } from './table/constraints/reducers';
import { fileFromatsReducer } from './file-formats/reducers';

import { hostInfo } from 'constants/ConstantsForAPI';

const hostInfoReducer = (state = hostInfo, action) => {
    return state;
};

export default combineReducers({
    fieldTypes: fieldTypesReducer,
    hostInfo: hostInfoReducer,
    datasets: datasetsReducer,
    customDataset: customDatasetReducer,
    objectInfo: objectInfoReducer,
    fields: fieldsReducer,
    constraints : constraintsReducer,
    fileFormats: fileFromatsReducer
});
