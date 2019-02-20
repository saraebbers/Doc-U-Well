export const profileReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROFILE' :
      return [...state, action.profileDetails]
    case 'GET_PROFILE' :
      return [...state, ...action.profileDetails]
    case 'CLEAR_PROFILE' :
      return []
    default:
      return state
  }
}
