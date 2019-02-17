export const profileReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROFILE' :
      return [...state, action.profileDetails]
    default:
      return state
  }
}