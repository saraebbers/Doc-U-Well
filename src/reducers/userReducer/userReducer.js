export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'POST_USER' :
      return {...action.userDetails}
    case 'GET_USER' :
      return {...state, ...action.userDetails}
    case 'LOGOUT_USER' :
      return {}
    default:
      return state
  }
}
