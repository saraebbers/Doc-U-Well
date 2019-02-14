export const appointmentReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_APPOINTMENT' :
      return [...state, action.appointmentDetails]
    default:
      return state
  }
}