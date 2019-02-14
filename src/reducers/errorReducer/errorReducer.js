export const errorReducer = (state = [], action) => {
  switch(action.type) {
    case 'HAS_ERRORED' :
      return [...state, action.errorMessage]
    default:
      return state
  }
}