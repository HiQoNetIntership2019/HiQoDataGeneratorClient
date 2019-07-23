import { CHANGE_FIELD_TYPES } from "./actions";

const defaultState = {
  currentFieldTypes: new Map()
}

export const fieldTypesReducer = (state = defaultState, action) => {
  switch (action.type) {
   case CHANGE_FIELD_TYPES:
     return {
       ...state,
       currentFieldTypes : new Map(state.currentFieldTypes)
          .set(action.payload.fieldId, action.payload.fieldType)
     }

   default:
    return state;
 }
};
