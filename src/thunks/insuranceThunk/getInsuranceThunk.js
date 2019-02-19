import { isLoading, hasErrored, getInsurance } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const getAllInsuranceThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?api_key=${apiKey}&profile_id=1`)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const insuranceDetails = await response.json()
      dispatch(getInsurance(insuranceDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
