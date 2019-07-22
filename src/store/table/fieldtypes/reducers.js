import { CHANGE_FIELD_TYPES } from "./actions";

const defaultState = {
  fieldType: null
}

export const fieldTypesReducer = (state = defaultState, action) => {
  switch (action.type) {
   case CHANGE_FIELD_TYPES:
     return {
       ...state,
       fieldType: action.payload
     }

   default:
    return state;
 }
};
