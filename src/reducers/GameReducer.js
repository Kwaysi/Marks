
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'a':
      return {...state};
    default:
      return state
  }
}