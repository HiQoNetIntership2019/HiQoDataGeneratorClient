export const CHANGE_FIELD_TYPES = "CHANGE_FIELD_TYPES";

export const setFieldType = (typeName, fieldId) => ({
  type: CHANGE_FIELD_TYPES,
  payload: { typeName, fieldId }
});
