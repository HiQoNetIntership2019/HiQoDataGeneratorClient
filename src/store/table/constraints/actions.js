export const CHANGE_CONSTRAINT_TYPES = "CHANGE_CONSTRAINT_TYPES";

export const setConstraintType = constraint => ({
  type: CHANGE_CONSTRAINT_TYPES,
  payload: constraint
});