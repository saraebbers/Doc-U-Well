import { isLoading, hasErrored, getAppointments } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAllAppointmentsThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?api_key=${apiKey}&profile_id=1`)
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
