import { GET_JOB } from "../actions/actions";

const initialState = {
  list: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
