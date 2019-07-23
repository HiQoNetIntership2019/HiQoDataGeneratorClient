import { CHANGE_OBJECT_NAME, CHANGE_OBJECTS_COUNT } from "./actions";

const defaultState = {
  name: "",
  count: 1
}

export const objectInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_OBJECT_NAME:
      return {
        ...state,
        name: action.payload
      }

    case CHANGE_OBJECTS_COUNT:
      return {
        ...state,
        count: action.payload
      }

    default:
      return state
  }
};
