import { combineReducers } from 'redux';

import { fieldTypesReducer } from './table/fieldtypes/reducers';
import {
  HOST_NAME,
  API_FOR_ALL_TYPES
} from '../constants/ConstantsForAPI';

const defaultHostInfoReducer = {
  HOST_NAME,
  API_FOR_ALL_TYPES
}

const hostInfoReducer = (state = defaultHostInfoReducer, action) => {
    return state;
};


export default combineReducers({
    fieldTypes: fieldTypesReducer,
    hostInfo: hostInfoReducer
});
