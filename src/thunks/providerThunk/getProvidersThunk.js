import { isLoading, hasErrored, getProviders } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAllProvidersThunk = (url) => {
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
      const providerDetails = await response.json()
      dispatch(getProviders(providerDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
