export const CHANGE_FIELD_TYPES = "CHANGE_FIELD_TYPES";

export const setFieldType = typeName => ({
  type: CHANGE_FIELD_TYPES,
  payload: typeName
});
