export const providersReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROVIDER' :
      return [...state, action.providersDetails]
    default:
      return state
  }
}