import { SET_FILE_FORMAT } from './actions';

const defaultState = {
  id: 2,
  name: "json"
}

export const fileFromatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILE_FORMAT:
      return {
        id: action.payload.id,
        name: action.payload.name
      }

    default:
      return state;
  }
}
