export const CHANGE_FIELD_TYPES = "CHANGE_FIELD_TYPES";
export const REMOVE_FIELD_TYPE = "REMOVE_FIELD_TYPE";

export const setFieldType = (fieldType, fieldId) => ({
  type: CHANGE_FIELD_TYPES,
  payload: { fieldType, fieldId }
});

export const removeFieldType = fieldId => ({
  type: REMOVE_FIELD_TYPE,
  payload: fieldId
});
