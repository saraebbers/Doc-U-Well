import { isLoading, hasErrored, getAppointments } from '../../actions/index'


export const getAllAppointmentsThunk = (url, user) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?api_key=${user.attributes.api_key}&profile_id=${user.id}`)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const appointmentDetails = await response.json()
      dispatch(getAppointments(appointmentDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
