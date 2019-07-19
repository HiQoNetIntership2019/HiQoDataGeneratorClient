import { CHANGE_FIELD_TYPES } from "./actions";

const defaultState = {
  typeName: null
}

export const fieldTypesReducer = (state = defaultState, action) => {
  switch (action.type) {
   case CHANGE_FIELD_TYPES:
     return {
       ...state,
       typeName: action.payload
     }

   default:
    return state;
 }
};
