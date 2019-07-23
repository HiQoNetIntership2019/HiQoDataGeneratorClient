export const SET_CONSTRAINTS = "ADD_CONSTRAINT";
export const CHANGE_CONSTRAINT_VALUE = "CHANGE_CONSTRAINT_VALUE";
export const REMOVE_CONSTRAINT = "REMOVE_CONSTRAINT";

export const setConstraints = (constraints, fieldId) => ({
  type: SET_CONSTRAINTS,
  payload: { constraints, fieldId }
});

export const changeConstraintValue = (constraint, fieldId) => ({
  type: CHANGE_CONSTRAINT_VALUE,
  payload: { constraint, fieldId }
});

export const removeConstraint = (constraintId, fieldId) => ({
  type: REMOVE_CONSTRAINT,
  payload: { constraintId, fieldId }
});