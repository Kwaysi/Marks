import { SETPERfORMANCE, SETUSERDETAILS, DISABLEFLASH } from "../actions/types";

const INITIAL = {
  user: localStorage.getItem('user'),
  performance: localStorage.getItem('performance'),
  disableFlash: localStorage.getItem('flash')
}

export default (state = INITIAL, action) => {
  const { type, payload } = action;
  switch (type) {
    case SETPERfORMANCE:
      return { ...state, performance: payload };
    case SETUSERDETAILS:
      return { ...state, user: payload };
    case DISABLEFLASH:
      return { ...state, disableFlash: payload }
    default:
      return state
  }
}
