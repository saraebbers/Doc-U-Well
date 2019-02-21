import { isLoading, hasErrored, addInsurance } from '../../actions/index'


export const addInsuranceThunk = (user, payload) => {
  let url = 'https://my-health-tracker.herokuapp.com/api/v1/insurances'
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
      }
      dispatch(isLoading(false))
      const insuranceDetails = await response.json()
      dispatch(addInsurance(insuranceDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
