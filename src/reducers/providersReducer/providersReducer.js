export const providersReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROVIDER' :
      return [...state, action.providerDetails]
    case 'GET_PROVIDERS' :
      return [...state, action.providerDetails]
    default:
      return state
  }
}