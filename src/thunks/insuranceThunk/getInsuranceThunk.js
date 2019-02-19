import { isLoading, hasErrored, getInsurance } from '../../actions/index'


export const getAllInsuranceThunk = (url, user) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?api_key=${user.attributes.api_key}&profile_id=${user.id}`)
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
