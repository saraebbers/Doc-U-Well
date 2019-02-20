import { isLoading, hasErrored, addProvider } from '../../actions/index'

export const addProviderThunk = (user, payload) => {

  let url = 'https://my-health-tracker.herokuapp.com/api/v1/providers'
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
        console.log('error', response.statusText)
      }
      dispatch(isLoading(false))
      const providerDetails = await response.json()
      dispatch(addProvider(providerDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
