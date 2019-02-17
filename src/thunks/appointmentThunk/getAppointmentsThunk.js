import { isLoading, hasErrored, getAppointments } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAppointmentsThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'api_key': `${apiKey}`
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const appointmentDetails = await response.json()
      dispatch(addAppointments(appointmentDetails))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}