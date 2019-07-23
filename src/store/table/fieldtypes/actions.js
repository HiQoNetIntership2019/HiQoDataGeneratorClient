export const CHANGE_FIELD_TYPES = "CHANGE_FIELD_TYPES";

export const setFieldType = (fieldType, fieldId) => ({
  type: CHANGE_FIELD_TYPES,
  payload: { fieldType, fieldId }
});
