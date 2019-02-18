import { isLoading, hasErrored, getAppointments } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAllAppointmentsThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const payload = {
        api_key: "",
        profile_id: '1'
      }
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json',
          'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(payload)
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const appointmentDetails = await response.json()
      dispatch(getAppointments(appointmentDetails.results))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
