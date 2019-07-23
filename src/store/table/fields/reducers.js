import { ADD_FIELD, MODIFY_FIELD, REMOVE_FIELD } from "./actions";

const defaultState = {
  fieldsData: new Map().set(1, { name: "", isNotNull: false}),
  fieldsCounter : 2
}

export const fieldsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        fieldsData: new Map(state.fieldsData).set(
          state.fieldsCounter, 
          {
            name: action.payload.fieldName,
            isNotNull: action.payload.isNotNull 
          }),
        fieldsCounter: state.fieldsCounter+1
      }

    case MODIFY_FIELD:
      return {
        ...state,
        fieldsData: new Map(state.fieldsData).set(
          action.payload.fieldId, 
          {
            name: action.payload.fieldName,
            isNotNull: action.payload.isNotNull
          })
      }

    case REMOVE_FIELD:
      let newFieldsData = new Map(state.fieldsData);
      newFieldsData.delete(action.payload.fieldId);
      return {
        ...state,
        fieldsData: newFieldsData
      }  

    default:
      return state;
  }
};
