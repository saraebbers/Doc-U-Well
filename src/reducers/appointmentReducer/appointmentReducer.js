export const appointmentReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_APPOINTMENT' :
      return [...state, action.appointmentDetails]
    case 'GET_APPOINTMENTS' :
      return [...state, ...action.appointmentDetails]
    case 'CLEAR_APPOINTMENTS' :
      return []
    default:
      return state
  }
}