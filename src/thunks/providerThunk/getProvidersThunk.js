import { isLoading, hasErrored, getProviders } from '../../actions/index'

export const getAllProvidersThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'GET'
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
