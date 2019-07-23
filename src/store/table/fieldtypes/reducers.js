import { CHANGE_FIELD_TYPES, REMOVE_FIELD_TYPE } from "./actions";

const defaultState = {
  currentFieldTypes: new Map()
}

export const fieldTypesReducer = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_FIELD_TYPES:
      return {
        ...state,
        currentFieldTypes : new Map(state.currentFieldTypes)
          .set(action.payload.fieldId, action.payload.fieldType)
      }

    case REMOVE_FIELD_TYPE:{
      let newFieldTypes = new Map(state.currentFieldTypes);
      newFieldTypes.delete(action.payload.fieldId);
      return {
        ...state,
        currentFieldTypes: newFieldTypes
      } 
    }  

    default:
      return state;
  }
};
