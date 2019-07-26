import { CHANGE_DATASET, REMOVE_DATASET } from './actions';

const defaultState = { currentDatasets: new Map() }

export const datasetsReducer = (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_DATASET:
      return {
        ...state,
        currentDatasets: new Map(state.currentDatasets).set(action.payload.fieldId, action.payload.dataset)
      }

    case REMOVE_DATASET:
      let newDatasets = new Map(state.currentDatasets);
      newDatasets.delete(action.payload.fieldId);
      return {
        ...state,
        currentDatasets: newDatasets
      }

    default:
      return state;
  }
}
