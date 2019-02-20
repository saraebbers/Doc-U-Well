export const insuranceReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_INSURANCE' :
      return [...state, action.insuranceDetails]
    case 'GET_INSURANCE' :
      return [...state, ...action.insuranceDetails]
    case 'CLEAR_INSURANCE' :
      return []
    default:
      return state
  }
}