import { isLoading, hasErrored, getProfile } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getProfileThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?api_key=${apiKey}`))
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const profileDetails = await response.json()
      dispatch(getProfile(profileDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}