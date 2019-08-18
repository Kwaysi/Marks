import { SETPERfORMANCE, SETUSERDETAILS } from "../actions/types";

export default (state = {user: null}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SETPERfORMANCE:
      return {...state, performance: payload};
    case SETUSERDETAILS:
      return { ...state, user: payload };
    default:
      return state
  }
}