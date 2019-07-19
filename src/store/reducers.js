import { combineReducers } from 'redux';

import { fieldTypesReducer } from './table/fieldtypes/reducers';
import { constraintTypesReducer } from './table/constraints/reducers';

import {
  HOST_NAME,
  API_FOR_ALL_TYPES,
  API_FOR_ALL_CONSTRAINTS,
  API_FOR_CONSTRAINTS_BY_FIELD_TYPE
} from '../constants/ConstantsForAPI';

const defaultHostInfoReducer = {
  HOST_NAME,
  API_FOR_ALL_TYPES,
  API_FOR_ALL_CONSTRAINTS,
  API_FOR_CONSTRAINTS_BY_FIELD_TYPE
}

const hostInfoReducer = (state = defaultHostInfoReducer, action) => {
    return state;
};


export default combineReducers({
    fieldTypes: fieldTypesReducer,
    hostInfo: hostInfoReducer,
    constraintTypes : constraintTypesReducer
});
