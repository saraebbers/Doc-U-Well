import { isLoading, hasErrored, getProviders } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAllProvidersThunk = (url) => {
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
      const providerDetails = await response.json()
      dispatch(getProviders(providerDetails.results))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}