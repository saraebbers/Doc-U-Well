import { isLoading, hasErrored, getProfile } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getProfileThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      // const payload = {
          // 'api_key': `${apiKey}`
        // }
      const response = await fetch(url, {
        method: 'GET',
        // body: JSON.stringify(payload)
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const profileDetails = await response.json()
      dispatch(getProfile(profileDetails.results))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}