import { CHANGE_DATASET } from './actions';

const defaultState = { currents: new Map() }

export const datasetsReducer = (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_DATASET:
      return {
        ...state,
        current: new Map(state.currents).set(action.payload.fieldId, action.payload.dataset)
      }
    default:
      return state;
  }
}
