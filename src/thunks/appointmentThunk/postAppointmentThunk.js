import { isLoading, hasErrored, addAppointment } from '../../actions/index'

export const addAppointmentThunk = (user, payload) => {
  let url = 'https://my-health-tracker.herokuapp.com/api/v1/appointments'
  console.log(payload)
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const appointmentDetails = await response.json()
      dispatch(addAppointment(appointmentDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
