export const SET_CONSTRAINTS = "SET_CONSTRAINTS";
export const CHANGE_CONSTRAINT_VALUE = "CHANGE_CONSTRAINT_VALUE";
export const REMOVE_CONSTRAINT = "REMOVE_CONSTRAINT";
export const SET_CONSTRAINTS_STATE = "SET_CONSTRAINTS_STATE";
export const SET_OPTIONS = "SET_OPTIONS";

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

export const setConstraintsState = (fieldId, isEnabled) => ({
  type: SET_CONSTRAINTS_STATE,
  payload: { fieldId, isEnabled }
});

export const setOptions = (constraintName, options) => ({
  type: SET_OPTIONS,
  payload: { constraintName, options }
});