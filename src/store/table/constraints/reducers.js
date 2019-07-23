import { SET_CONSTRAINTS, CHANGE_CONSTRAINT_VALUE, REMOVE_CONSTRAINT } from "./actions";

const defaultState = {
  constraints: new Map()
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
      let fieldId = action.payload.fieldId;
      let constraints = new Map(state.constraints.get(fieldId)).set(action.payload.constraint.id, action.payload.constraint);
      return {
        ...state,
        constraints: new Map(state.constraints).set(fieldId, constraints)
      }
    }
    case REMOVE_CONSTRAINT: {
      let fieldId = action.payload.fieldId;
      let constraints = new Map(state.constraints.get(fieldId));
      constraints.delete(action.payload.constraintId);
      return {
        ...state,
        constraints: new Map(state.constraints).set(fieldId, constraints)
      }
    }

    default:
      return state;
  }
};