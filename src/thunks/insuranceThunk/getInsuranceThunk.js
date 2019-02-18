import { isLoading, hasErrored, getInsurance } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAllInsuranceThunk = (url) => {
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
      const insuranceDetails = await response.json()
      dispatch(getInsurance(insuranceDetails.results))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
