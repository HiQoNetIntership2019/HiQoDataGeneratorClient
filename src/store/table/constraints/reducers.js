import { 
  SET_CONSTRAINTS, 
  CHANGE_CONSTRAINT_VALUE, 
  REMOVE_CONSTRAINT,
  SET_OPTIONS
} from "./actions";

import changeConstraints  from "./constraintsHelpers";

const defaultState = {
  constraints: new Map(),
  options: new Map()
}

export const constraintsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONSTRAINTS: {
      let fieldId = action.payload.fieldId;
      let constraintsMap = new Map(action.payload.constraints);
      return {
        ...state,
        constraints: new Map(state.constraints).set(fieldId, constraintsMap)
      }
    }
    case CHANGE_CONSTRAINT_VALUE: {
      const fieldId = action.payload.fieldId;
      let constraints = new Map(state.constraints.get(fieldId));
      constraints = changeConstraints(constraints, action.payload.constraint);
      return {
        ...state,
        constraints: new Map(state.constraints).set(fieldId, constraints)
      }
    }
    case REMOVE_CONSTRAINT: {
      let fieldId = action.payload.fieldId;
      let constraintId = action.payload.constraintId;
      let removedConstraint = state.constraints.get(fieldId).get(constraintId);
      removedConstraint.isIncluded = false;
      let constraints = new Map(state.constraints.get(fieldId)).set(constraintId, removedConstraint);
      return {
        ...state,
        constraints: new Map(state.constraints).set(fieldId, constraints)
      }
    }
    case SET_OPTIONS: {
      return {
        ...state,
        options: new Map(state.options).set(action.payload.constraintName, action.payload.options)
      }
    }
    default:
      return state;
  }
};