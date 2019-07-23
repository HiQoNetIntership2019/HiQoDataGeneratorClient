export const ADD_FIELD = "ADD_FIELD";
export const MODIFY_FIELD = "MODIFY_FIELD";
export const REMOVE_FIELD = "REMOVE_FIELD";

export const addField = (fieldName="", isNotNull = false) => ({
  type: ADD_FIELD,
  payload: { fieldName, isNotNull }
});

export const modifyField = (fieldId, fieldName, isNotNull) => ({
  type: MODIFY_FIELD,
  payload: { fieldId, fieldName, isNotNull}
});

export const removeField = (fieldId) => ({
  type: REMOVE_FIELD,
  payload: { fieldId }
});
