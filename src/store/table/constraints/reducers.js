import { CHANGE_CONSTRAINT_TYPES } from "./actions";

const defaultState = {
  constraintTypes: null
}

export const constraintTypesReducer = (state = defaultState, action) => {
  switch (action.type) {
   case CHANGE_CONSTRAINT_TYPES:
     return {
       ...state,
       constraintTypes: action.payload
     }

   default:
    return state;
  }
};