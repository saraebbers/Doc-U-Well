export const errorReducer = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED' :
      return action.errorMessage
    default:
      return state
  }
}
