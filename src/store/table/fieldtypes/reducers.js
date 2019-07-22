import { CHANGE_FIELD_TYPES } from "./actions";

const defaultState = {
  typeNames: new Map()
}

export const fieldTypesReducer = (state = defaultState, action) => {
  switch (action.type) {
   case CHANGE_FIELD_TYPES:
     return {
       ...state,
       typeNames: new Map(state.typeNames).set(action.payload.fieldId, action.payload.typeName)
     }

   default:
    return state;
 }
};
